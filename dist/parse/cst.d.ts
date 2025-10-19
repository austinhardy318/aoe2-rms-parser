import { Token as MooToken } from 'moo';
import { RuleNode } from './nearleyMiddleware';
export declare function toCst(root: RuleNode): CstNode;
export interface Token extends MooToken {
    parent?: CstNode;
}
export interface CstNode {
    type: string;
    parent?: CstNode;
    children: CstNodeChild[];
    childrenByType: {
        [x: string]: CstNodeChild[];
    };
}
export type CstNodeChild = CstNode | Token;
//# sourceMappingURL=cst.d.ts.map