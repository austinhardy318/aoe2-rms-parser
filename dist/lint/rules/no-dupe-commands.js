"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const lodash_1 = require("lodash");
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
function check(ast) {
    const dupeCommands = [];
    (0, treeHelpers_1.getNodes)(ast, 'StatementsBlock').forEach(block => {
        const alreadySeenCommands = [];
        const commands = (0, treeHelpers_1.getChildren)(block, 'Command');
        commands.forEach(command => {
            if (alreadySeenCommands.some(x => (0, lodash_1.isEqual)(x, command))) {
                dupeCommands.push([command, `Duplicate command '${command.name}' with exactly the same arguments and attibutes.`]);
            }
            else {
                alreadySeenCommands.push(command);
            }
        });
        const alreadySeenConditionalCommands = [];
        const conditionalCommands = (0, treeHelpers_1.getChildren)(block, 'ConditionalCommand');
        conditionalCommands.forEach(command => {
            if (alreadySeenConditionalCommands.some(x => (0, lodash_1.isEqual)(x, command))) {
                dupeCommands.push([command, `Duplicate command with exactly the same alternatives, arguments, and attibutes.`]);
            }
            else {
                alreadySeenConditionalCommands.push(command);
            }
        });
    });
    return dupeCommands.map(([node, message]) => ({
        name: 'LintError',
        message,
        boundaries: {
            start: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getToken)(node)).start,
            end: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getLastToken)(node)).end
        }
    }));
}
//# sourceMappingURL=no-dupe-commands.js.map