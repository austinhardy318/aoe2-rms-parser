import { Script } from '../parse';
import { TextSpanError } from '../tokenHelpers';
export declare function lint(ast: Script | undefined, options?: {
    [x: string]: any;
}): LintError[];
export interface LintError extends TextSpanError {
    name: 'LintError';
}
//# sourceMappingURL=index.d.ts.map