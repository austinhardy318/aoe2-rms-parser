"use strict";
/**
 * Run this file with `ts-node` to generate `.ts` files in `./generated` from `.rms` libraries.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const fs_1 = require("fs");
const path_1 = require("path");
if (!(0, fs_1.existsSync)((0, path_1.join)(__dirname, 'generated'))) {
    (0, fs_1.mkdirSync)((0, path_1.join)(__dirname, 'generated'));
}
const libs = ['aoc', 'dlc', 'userpatch'];
libs.forEach(generateJsonFromLibFile);
function generateJsonFromLibFile(libname) {
    console.log(`Generating definitions for ${libname}...`);
    const { errors, ast } = (0, __1.parse)((0, fs_1.readFileSync)((0, path_1.join)(__dirname, `lib.${libname}.rms`), 'utf8'));
    if (errors.length) {
        throw new Error(`Cannot parse AST of lib '${libname}'! First error: ${errors[0].message}\n\n${errors[0].stack}`);
    }
    else {
        const code = 'export default ' + astToJson(ast);
        (0, fs_1.writeFileSync)((0, path_1.join)(__dirname, 'generated', `lib.${libname}.ts`), code);
    }
}
function astToJson(ast) {
    let section;
    let lastDeclaration;
    const definitions = {
        general: [],
        terrains: [],
        entities: []
    };
    ast.statements.forEach(statement => {
        switch (statement.type) {
            case 'SectionStatement':
                section = statement.name;
                break;
            case 'DeclarationStatement':
                if (lastDeclaration) {
                    // There was a declaration before with no comment. We need to add it.
                    addDefinition(definitions, lastDeclaration, section);
                }
                lastDeclaration = statement;
                break;
            case 'MultilineComment':
                if (lastDeclaration) {
                    // There was a declaration right before this comment. Let's assume they are on the same line and this comment is description.
                    addDefinition(definitions, lastDeclaration, section, statement.comment.trim());
                    lastDeclaration = undefined;
                }
                break;
            default:
                console.error(`Unexpected statement '${statement.type}'!`);
        }
    });
    return JSON.stringify(definitions, null, 2);
}
function addDefinition(definitions, { name, value }, section, comment) {
    const type = (section || 'GENERAL').toLowerCase();
    definitions[type].push({
        name: (!name || name === '__noname') ? undefined : name,
        value: value,
        description: comment
    });
}
//# sourceMappingURL=generate.js.map