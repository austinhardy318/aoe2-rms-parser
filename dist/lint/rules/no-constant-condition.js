"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
function check(ast) {
    const conditionallyDefined = [];
    const unconditionallyDefined = [];
    const invalidConditionIdentifiers = [];
    const condBlocks = [...(0, treeHelpers_1.getNodes)(ast, 'IfStatement'), ...(0, treeHelpers_1.getNodes)(ast, 'ChanceStatement')];
    condBlocks.forEach(parent => {
        conditionallyDefined.push(...getDefines(parent).map(x => x.name));
    });
    getDefines(ast).forEach(({ name }) => {
        if (!conditionallyDefined.includes(name))
            unconditionallyDefined.push(name);
    });
    const allIfs = [
        ...(0, treeHelpers_1.getDescendants)(ast, 'IfStatement'),
        ...(0, treeHelpers_1.getDescendants)(ast, 'ElseIfStatement')
    ];
    allIfs.forEach(ifNode => {
        if (unconditionallyDefined.includes(ifNode.condition)) {
            invalidConditionIdentifiers.push((0, treeHelpers_1.getToken)(ifNode, 'identifier'));
        }
    });
    return invalidConditionIdentifiers.map(x => ({
        name: 'LintError',
        message: `Condition '${x.value}' is always true.`,
        boundaries: (0, tokenHelpers_1.getBoundaries)(x)
    }));
}
function getDefines(parent) {
    return (0, treeHelpers_1.getNodes)(parent, 'DeclarationStatement').filter(x => x.kind === 'define');
}
//# sourceMappingURL=no-constant-condition.js.map