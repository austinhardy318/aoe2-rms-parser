import { Token } from './parse';
export declare function getBoundaries(token?: Token): TextSpan;
export interface TextSpan {
    start: {
        line: number;
        col: number;
    };
    end: {
        line: number;
        col: number;
    };
}
export interface TextSpanError extends Error {
    name: string;
    message: string;
    boundaries: TextSpan;
}
//# sourceMappingURL=tokenHelpers.d.ts.map