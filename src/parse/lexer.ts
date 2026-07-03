import { states, Token } from 'moo'
import { getBoundaries, TextSpanError } from '../tokenHelpers'

export interface Lexer {
  reset: (chunk: string, info: Record<string, unknown>) => void
  next: () => Token | undefined
  save: () => Record<string, unknown>
  formatError: (token: Token) => string
  has: (tokenType: string) => boolean
  line?: number
  col?: number
}

export const lexer = states({
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
    int: /-?[0-9]+\b/,
    // Brackets are escaped to keep the regex literal unambiguous for tooling.
    // eslint-disable-next-line no-useless-escape -- literal [ and ] in identifier charset
    identifier: /[^\s!@#%^&*()+=;:'"<>{}\[\]?/\\-][^\s;'"<>{}\[\]/\\]*/,
    invalid: { error: true } as { error: true }
  },
  comment: {
    commentStart: { match: '/*', push: 'comment' },
    commentText: { match: /(?:(?!\*\/|\/\*)[\s\S])+/, lineBreaks: true },
    commentEnd: { match: '*/', pop: 1 }
  }
})

export function formatLexError (err: Error & { token: Token }): TextSpanError {
  // When moo gets an unknown token, it gives up and returns
  // everything to eof as a single 'invalid' token. Let's at least separate the first word.
  const invalidTokenEndIndex = Math.min(err.token.value.length, ...[' ', '\r\n', '\n']
    .map(x => err.token.value.indexOf(x))
    .filter(x => x !== -1))
  const invalidTokenEndCol = err.token.col + invalidTokenEndIndex

  return {
    name: 'ParseError',
    message: `Unable to parse '${err.token.value.slice(0, invalidTokenEndIndex)}'.`,
    boundaries: {
      start: getBoundaries(err.token).start,
      end: {
        line: getBoundaries(err.token).start.line,
        col: invalidTokenEndCol
      }
    }
  }
}
