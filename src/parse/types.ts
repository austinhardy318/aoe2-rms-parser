export interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: unknown[], loc?: number, reject?: () => void) => unknown;
}

export type NearleySymbol = string | { literal: string | number } | { test: (token: NearleyToken) => boolean };

export interface NearleyToken {
  value: string | number;
  [key: string]: unknown;
}

export interface NearleyLexer {
  reset: (chunk: string, info: Record<string, unknown>) => void;
  next: () => NearleyToken | undefined;
  save: () => Record<string, unknown>;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
}

export interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
}
