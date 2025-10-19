"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
const lodash_1 = require("lodash");
function check(ast) {
    const dupeAttributes = [];
    (0, treeHelpers_1.getNodes)(ast, 'StatementsBlock').forEach(block => {
        const alreadySeenAttributes = [];
        const attributes = (0, treeHelpers_1.getChildNodes)(block, 'Attribute');
        attributes.forEach(attr => {
            if ((0, lodash_1.find)(alreadySeenAttributes, x => (0, lodash_1.isEqual)(x, attr)))
                dupeAttributes.push(attr);
            else
                alreadySeenAttributes.push(attr);
        });
    });
    return dupeAttributes.map(x => ({
        name: 'LintError',
        message: `Duplicate attribute '${x.name}'.`,
        boundaries: {
            start: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getToken)(x, undefined, true)).start,
            end: (0, tokenHelpers_1.getBoundaries)((0, treeHelpers_1.getLastToken)(x, undefined, true)).end
        }
    }));
}
//# sourceMappingURL=no-dupe-attributes.js.map