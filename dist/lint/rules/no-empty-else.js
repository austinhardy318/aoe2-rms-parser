"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
function check(ast) {
    const errors = [];
    const ifs = (0, treeHelpers_1.getNodes)(ast, 'IfStatement');
    ifs.forEach(ifNode => {
        if (ifNode.elseStatements && ifNode.elseStatements.length === 0) {
            errors.push({
                name: 'LintError',
                message: "Empty \'else\'.",
                boundaries: {
                    start: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getToken)((0, treeHelpers_1.getChildNode)(ifNode, 'Else', true))).start,
                    end: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getLastToken)(ifNode, undefined, true)).end
                }
            });
        }
    });
    return errors;
}
//# sourceMappingURL=no-empty-else.js.map