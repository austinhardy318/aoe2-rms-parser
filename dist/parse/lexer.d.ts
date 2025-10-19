import { Token } from 'moo';
import { TextSpanError } from '../tokenHelpers';
export interface Lexer {
    reset: (chunk: string, info: any) => void;
    next: () => Token | undefined;
    save: () => any;
    formatError: (token: Token) => string;
    has: (tokenType: string) => boolean;
}
export declare const lexer: import("moo").Lexer;
export declare function formatLexError(err: Error & {
    token: Token;
}): TextSpanError;
//# sourceMappingURL=lexer.d.ts.map