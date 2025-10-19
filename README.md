# aoe2-rms-parser

> Modern parser and linter for Age of Empires 2 Random Map Scripts

TypeScript parser and linter for [Random Map Scripts](http://aok.heavengames.com/cgi-bin/forums/display.cgi?action=ct&f=28,42485,,30) (RMS) for the [Age of Empires II](https://en.wikipedia.org/wiki/Age_of_Empires_II) video game. This is a modernized fork of the original Mangudai parser with updated dependencies, improved build system, and enhanced developer experience.

- [VS Code extension](https://marketplace.visualstudio.com/items?itemName=deltaidea.aoe2-rms) ([repo](https://github.com/mangudai/vscode))
- [Sublime Text package](https://packagecontrol.io/packages/AoE2%20RMS%20Syntax%20Highlighting) ([repo](https://github.com/mangudai/sublime-text))

## Install

aoe2-rms-parser is published as an [NPM](https://docs.npmjs.com/getting-started/what-is-npm) package compatible with [Node.js](https://nodejs.org/en/) and browsers.

```Bash
npm install aoe2-rms-parser
```

Use a tool like [Webpack](https://webpack.js.org) or [Rollup](https://rollupjs.org/) to include aoe2-rms-parser in your front-end app.

The code is compiled to ES2022 and bundled with esbuild for optimal performance and compatibility. Built with modern tooling including TypeScript 5, Jest 29, ESLint 9, and Docker support.

## Usage

Let's parse an RMS script into an [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST) and lint it.

```JavaScript
import { parse, lint } from 'aoe2-rms-parser'

const { ast, errors } = parse('<PLAYER_SETUP> \n random_placement')

if (errors.length) {
  console.log('Unable to parse the script! Probably invalid syntax.', errors)
} else {
  const lintErrors = lint(ast)
  console.log(`Linter found ${lintErrors.length} problems.`, lintErrors)
}
```

aoe2-rms-parser is written in [TypeScript](https://www.typescriptlang.org/) and exports all relevant typings.

## API

- ### parse( script: `string` ) => { ast: [`Script`](docs/ast-spec.md), errors: [`ParseError[]`](docs/errors.md) }
- ### lint( ast: [`Script`](docs/ast-spec.md) ) => [`LintError[]`](docs/errors.md)

## Development

### Prerequisites
- Node.js 20+ 
- Docker (optional, for containerized development)

### Setup
```bash
# Clone the repository
git clone https://github.com/austinhardy318/aoe2-rms-parser.git
cd aoe2-rms-parser

# Install dependencies
npm install

# Run tests
npm test

# Build the package
npm run build
```

### Docker Development
```bash
# Run tests in Docker
docker-compose run test

# Run build in Docker
docker-compose run build

# Start development container
docker-compose run dev
```

### Available Scripts
- `npm test` - Run Jest test suite
- `npm run build` - Build the package with TypeScript and esbuild
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build artifacts

## Contribute

[![GitHub Actions](https://github.com/austinhardy318/aoe2-rms-parser/workflows/CI/badge.svg)](https://github.com/austinhardy318/aoe2-rms-parser/actions)
[![Test coverage](https://img.shields.io/codecov/c/github/austinhardy318/aoe2-rms-parser/master.svg)](https://codecov.io/gh/austinhardy318/aoe2-rms-parser)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-29+-green.svg)](https://jestjs.io/)

This project is actively maintained. Any help is greatly appreciated! Feel free to ask questions in issues. PRs accepted.

## License

[MIT](./LICENSE.md) © Mangudai contributors (original), Austin (modernized)
