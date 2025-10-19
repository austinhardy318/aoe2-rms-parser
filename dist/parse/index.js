"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
exports.formatParseError = formatParseError;
const nearley_1 = require("nearley");
const grammar_1 = __importDefault(require("./grammar"));
const nearleyMiddleware_1 = require("./nearleyMiddleware");
const cst_1 = require("./cst");
const ast_1 = require("./ast");
const lexer_1 = require("./lexer");
const tokenHelpers_1 = require("../tokenHelpers");
__exportStar(require("./astTypes"), exports);
const wrappedGrammar = { ...grammar_1.default, ParserRules: (0, nearleyMiddleware_1.ruleNodesMiddleware)(grammar_1.default.ParserRules) };
// TODO: Fix nearley.Grammar.fromCompiled() TypeScript definition.
const compiledGrammar = nearley_1.Grammar.fromCompiled(wrappedGrammar);
function parse(input) {
    const parser = new nearley_1.Parser(compiledGrammar);
    try {
        parser.feed(input);
        const parsings = parser.results.map(cst_1.toCst).map(ast_1.toAst);
        if (parsings.length > 1) {
            throw new Error('Ambiguous grammar! This is likely a problem with Mangudai itself, ' +
                'not your script. Please report this issue along with the script that caused it.');
        }
        if (parsings.length === 0) {
            const { line, col } = parser.lexer;
            throw {
                name: 'ParseError',
                message: 'Unexpected end of input.',
                boundaries: {
                    start: { line: line, col: col - 1 },
                    end: { line: line, col: col }
                }
            };
        }
        return {
            ast: parsings[0],
            errors: []
        };
    }
    catch (error) {
        let errorWithTextSpan;
        if (error && error.boundaries) {
            errorWithTextSpan = error;
        }
        else if (error && error.token && error.token.type === 'invalid') {
            errorWithTextSpan = (0, lexer_1.formatLexError)(error);
        }
        else if (error && error.token) {
            errorWithTextSpan = formatParseError(error);
        }
        else {
            errorWithTextSpan = {
                name: 'ParseError',
                message: error && error.message,
                boundaries: {
                    start: { line: 1, col: 0 },
                    end: { line: 1, col: 1 }
                }
            };
        }
        return {
            errors: [errorWithTextSpan]
        };
    }
}
function formatParseError(err) {
    const token = err.token;
    const line = token.line || 1;
    const col = token.col || 1;
    let message = `Unexpected token '${token.value}' at line ${line}, column ${col}`;
    // Add more helpful error messages based on token type
    if (token.type === 'EOF') {
        message = `Unexpected end of file at line ${line}, column ${col}. Expected more content.`;
    }
    else if (token.type === 'INVALID') {
        message = `Invalid character '${token.value}' at line ${line}, column ${col}. Check for typos or unsupported characters.`;
    }
    else {
        message = `Unexpected ${token.type} '${token.value}' at line ${line}, column ${col}. Expected a different token.`;
    }
    return {
        name: 'ParseError',
        message,
        boundaries: (0, tokenHelpers_1.getBoundaries)(token)
    };
}
//# sourceMappingURL=index.js.map