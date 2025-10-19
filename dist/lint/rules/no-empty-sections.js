"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
function check(ast) {
    const errors = [];
    const sections = (0, treeHelpers_1.getNodes)(ast, 'SectionStatement');
    sections.forEach(section => {
        if (section.statements.length === 0) {
            errors.push({
                name: 'LintError',
                message: `Empty section \'${section.name}\'.`,
                boundaries: {
                    start: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getToken)(section)).start,
                    end: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getLastToken)(section)).end
                }
            });
        }
    });
    return errors;
}
//# sourceMappingURL=no-empty-sections.js.map