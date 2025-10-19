"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoundaries = getBoundaries;
const EMPTY_TOKEN = {
    value: '',
    offset: 0,
    lineBreaks: 0,
    line: 1,
    col: 1,
    text: ''
};
function getBoundaries(token = EMPTY_TOKEN) {
    const tokenLines = token.value.split('\n');
    return {
        start: {
            line: token.line,
            col: token.col - 1
        },
        end: {
            line: token.line + tokenLines.length - 1,
            col: token.col - 1 + tokenLines[tokenLines.length - 1].length
        }
    };
}
//# sourceMappingURL=tokenHelpers.js.map