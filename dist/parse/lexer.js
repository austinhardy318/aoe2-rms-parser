"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lexer = void 0;
exports.formatLexError = formatLexError;
const moo_1 = require("moo");
const tokenHelpers_1 = require("../tokenHelpers");
exports.lexer = (0, moo_1.states)({
    main: {
        eol: { match: /\s*\n\s*/, lineBreaks: true },
        space: /[\t ]+/,
        commentStart: { match: '/*', push: 'comment' },
        lArrow: '<',
        rArrow: '>',
        lCurly: '{',
        rCurly: '}',
        constToken: '#const',
        define: '#define',
        includeDrs: '#include_drs',
        ifToken: 'if',
        elseifToken: 'elseif',
        elseToken: 'else',
        endifToken: 'endif',
        startRandom: 'start_random',
        percentChance: 'percent_chance',
        endRandom: 'end_random',
        int: /\-?[0-9]+\b/,
        identifier: /[^\s!@#\$%\^&\*\(\)\-\+=;:'"<>{}\[\]\?\/\\][^\s;'"<>{}\[\]\/\\]*/,
        invalid: { error: true }
    },
    comment: {
        commentStart: { match: '/*', push: 'comment' },
        commentText: { match: /(?:(?!\*\/|\/\*)[\s\S])+/, lineBreaks: true },
        commentEnd: { match: '*/', pop: true }
    }
});
function formatLexError(err) {
    // When moo gets an unknown token, it gives up and returns
    // everything to eof as a single 'invalid' token. Let's at least separate the first word.
    let invalidTokenEndIndex = Math.min(err.token.value.length, ...[' ', '\r\n', '\n']
        .map(x => err.token.value.indexOf(x))
        .filter(x => x !== -1));
    let invalidTokenEndCol = err.token.col + invalidTokenEndIndex;
    return {
        name: 'ParseError',
        message: `Unable to parse '${err.token.value.slice(0, invalidTokenEndIndex)}'.`,
        boundaries: {
            start: (0, tokenHelpers_1.getBoundaries)(err.token).start,
            end: {
                line: (0, tokenHelpers_1.getBoundaries)(err.token).start.line,
                col: invalidTokenEndCol
            }
        }
    };
}
//# sourceMappingURL=lexer.js.map