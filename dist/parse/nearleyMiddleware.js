"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleNodesMiddleware = ruleNodesMiddleware;
const lodash_1 = require("lodash");
/**
 * Wraps all user-defined grammar rule results into objects so it's possible
 * to distinguish them in the sea of nested arrays that nearley generates.
 * The rule nodes have `type` (rule name) and `children` (array of parsed parts).
 *
 * @param rules The raw nearley grammar rules.
 */
function ruleNodesMiddleware(rules) {
    return rules.map(lodash_1.cloneDeep).map(rule => {
        if (!rule.name.includes('$')) {
            rule.postprocess = (parts) => ({
                type: rule.name,
                children: parts
            });
        }
        return rule;
    });
}
//# sourceMappingURL=nearleyMiddleware.js.map