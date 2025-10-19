import { Parser, Grammar } from 'nearley'
import grammar from './grammar'
import { ruleNodesMiddleware } from './nearleyMiddleware'
import { Token, toCst } from './cst'
import { toAst } from './ast'
import { Script } from './astTypes'
import { formatLexError } from './lexer'
import { getBoundaries, TextSpanError } from '../tokenHelpers'

export * from './astTypes'
export { Token, CstNode, CstNodeChild } from './cst'
export { TextSpanError } from '../tokenHelpers'

const wrappedGrammar = { ...grammar, ParserRules: ruleNodesMiddleware(grammar.ParserRules) }
// TODO: Fix nearley.Grammar.fromCompiled() TypeScript definition.
const compiledGrammar: Grammar = (Grammar.fromCompiled as any)(wrappedGrammar)

export function parse (input: string): { errors: TextSpanError[], ast?: Script } {
  const parser = new Parser(compiledGrammar)
  try {
    parser.feed(input)
    const parsings = parser.results.map(toCst).map(toAst)
    if (parsings.length > 1) {
      throw new Error('Ambiguous grammar! This is likely a problem with Mangudai itself, ' +
        'not your script. Please report this issue along with the script that caused it.')
    }
    if (parsings.length === 0) {
      const { line, col } = parser.lexer as any
      throw {
        name: 'ParseError',
        message: 'Unexpected end of input.',
        boundaries: {
          start: { line: line, col: col - 1 },
          end: { line: line, col: col }
        }
      }
    }
    return {
      ast: parsings[0],
      errors: []
    }
  } catch (error: any) {
    let errorWithTextSpan: TextSpanError
    if (error && error.boundaries) {
      errorWithTextSpan = error
    } else if (error && error.token && error.token.type === 'invalid') {
      errorWithTextSpan = formatLexError(error)
    } else if (error && error.token) {
      errorWithTextSpan = formatParseError(error)
    } else {
      errorWithTextSpan = {
        name: 'ParseError',
        message: error && error.message,
        boundaries: {
          start: { line: 1, col: 0 },
          end: { line: 1, col: 1 }
        }
      }
    }
    return {
      errors: [errorWithTextSpan]
    }
  }
}

export function formatParseError (err: Error & { token: Token }): TextSpanError {
  const token = err.token
  const line = token.line || 1
  const col = token.col || 1
  
  let message = `Unexpected token '${token.value}' at line ${line}, column ${col}`
  
  // Add more helpful error messages based on token type
  if (token.type === 'EOF') {
    message = `Unexpected end of file at line ${line}, column ${col}. Expected more content.`
  } else if (token.type === 'INVALID') {
    message = `Invalid character '${token.value}' at line ${line}, column ${col}. Check for typos or unsupported characters.`
  } else {
    message = `Unexpected ${token.type} '${token.value}' at line ${line}, column ${col}. Expected a different token.`
  }
  
  return {
    name: 'ParseError',
    message,
    boundaries: getBoundaries(token)
  }
}
