import { RecursiveArray } from 'lodash';
import { Token } from 'moo';
import { NearleyRule } from './types';
/**
 * Wraps all user-defined grammar rule results into objects so it's possible
 * to distinguish them in the sea of nested arrays that nearley generates.
 * The rule nodes have `type` (rule name) and `children` (array of parsed parts).
 *
 * @param rules The raw nearley grammar rules.
 */
export declare function ruleNodesMiddleware(rules: NearleyRule[]): NearleyRule[];
export type RuleNodeChildren = RecursiveArray<RuleNode | Token | null>;
export type RuleNode = {
    type: string;
    children: RuleNodeChildren;
};
//# sourceMappingURL=nearleyMiddleware.d.ts.map