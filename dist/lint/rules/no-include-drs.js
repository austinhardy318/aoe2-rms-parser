"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
function check(ast) {
    return (0, treeHelpers_1.getNodes)(ast, 'IncludeDrsStatement').map(x => ({
        name: 'LintError',
        message: "Do not use 'include_drs' outside of internal game maps.",
        boundaries: {
            start: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getToken)(x)).start,
            end: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getLastToken)(x)).end
        }
    }));
}
//# sourceMappingURL=no-include-drs.js.map