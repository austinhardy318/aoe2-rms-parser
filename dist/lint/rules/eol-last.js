"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
function check(ast, mode = 'always') {
    const lastToken = (0, treeHelpers_1.getLastToken)(ast);
    if (lastToken && lastToken.type === 'eol' && lastToken.value.endsWith('\n')) {
        return mode === 'always' ? [] : [{
                name: 'LintError',
                message: 'Newline not allowed at end of file.',
                boundaries: (0, tokenHelpers_1.getBoundaries)(lastToken)
            }];
    }
    else {
        return mode === 'never' ? [] : [{
                name: 'LintError',
                message: 'Newline required at end of file but not found.',
                boundaries: {
                    start: (0, tokenHelpers_1.getBoundaries)(lastToken).end,
                    end: (0, tokenHelpers_1.getBoundaries)(lastToken).end
                }
            }];
    }
}
//# sourceMappingURL=eol-last.js.map