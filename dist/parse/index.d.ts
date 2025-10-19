import { Token } from './cst';
import { Script } from './astTypes';
import { TextSpanError } from '../tokenHelpers';
export * from './astTypes';
export { Token, CstNode, CstNodeChild } from './cst';
export { TextSpanError } from '../tokenHelpers';
export declare function parse(input: string): {
    errors: TextSpanError[];
    ast?: Script;
};
export declare function formatParseError(err: Error & {
    token: Token;
}): TextSpanError;
//# sourceMappingURL=index.d.ts.map