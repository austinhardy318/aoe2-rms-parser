# aoe2-rms-parser

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-29+-green.svg)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-9+-purple.svg)](https://eslint.org/)
[![Docker](https://img.shields.io/badge/Docker-supported-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)

> Modern parser and linter for Age of Empires 2 Random Map Scripts

TypeScript parser and linter for [Random Map Scripts](http://aok.heavengames.com/cgi-bin/forums/display.cgi?action=ct&f=28,42485,,30) (RMS) for the [Age of Empires II](https://en.wikipedia.org/wiki/Age_of_Empires_II) video game. This is a modernized fork of the original [Mangudai parser](https://github.com/mangudai/parser) with updated dependencies, improved build system, and enhanced developer experience.

## Key Features

- **Parse RMS Scripts** - Convert RMS text into structured Abstract Syntax Trees
- **Lint & Validate** - Comprehensive linting with 14+ built-in rules
- **High Performance** - Fast parsing with esbuild optimization
- **Small Bundle** - 35% smaller than original parser
- **Docker Ready** - Consistent development and testing environments
- **TypeScript First** - Full type safety and IntelliSense support

## Modern Tooling

- **TypeScript 5** - Latest language features and improved type safety
- **Jest 29** - Modern testing framework with better performance
- **ESLint 9** - Latest linting rules and flat config support
- **esbuild** - Fast bundling with tree-shaking and minification
- **GitHub Actions** - Automated CI/CD with Docker testing

## Extensions

- [VS Code extension](https://marketplace.visualstudio.com/items?itemName=deltaidea.aoe2-rms) ([repo](https://github.com/austinhardy318/vscode-aoe2-rms))
- [Sublime Text package](https://packagecontrol.io/packages/AoE2%20RMS%20Syntax%20Highlighting) ([repo](https://github.com/mangudai/sublime-text))

## Installation

aoe2-rms-parser is published as an [NPM](https://docs.npmjs.com/getting-started/what-is-npm) package compatible with [Node.js](https://nodejs.org/en/) and browsers.

```bash
npm install aoe2-rms-parser
```

### Browser Usage

For browser environments, use a bundler like [Webpack](https://webpack.js.org), [Rollup](https://rollupjs.org/), or [Vite](https://vitejs.dev/):

```bash
# With Webpack
npm install --save-dev webpack webpack-cli

# With Rollup
npm install --save-dev rollup @rollup/plugin-node-resolve

# With Vite
npm install --save-dev vite
```

The package is compiled to ES2022 and bundled with esbuild for optimal performance and compatibility.

## Usage

### Basic Parsing

Parse an RMS script into an [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST):

```typescript
import { parse, lint } from 'aoe2-rms-parser'

const rmsScript = `
<PLAYER_SETUP>
  random_placement
  number_of_players 2
  team_together
`

const { ast, errors } = parse(rmsScript)

if (errors.length) {
  console.log('Parse errors:', errors)
} else {
  console.log('Successfully parsed!', ast)
}
```

### Linting

Validate your RMS script with built-in linting rules:

```typescript
import { parse, lint } from 'aoe2-rms-parser'

const { ast } = parse(rmsScript)
const lintErrors = lint(ast)

if (lintErrors.length > 0) {
  console.log(`Found ${lintErrors.length} linting issues:`)
  lintErrors.forEach(error => {
    console.log(`- ${error.message} at line ${error.line}`)
  })
}
```

### Error Handling

The parser provides detailed error information:

```typescript
const { ast, errors } = parse('invalid syntax here')

errors.forEach(error => {
  console.log(`Error: ${error.message}`)
  console.log(`Location: line ${error.line}, column ${error.column}`)
  console.log(`Text: "${error.text}"`)
})
```

aoe2-rms-parser is written in [TypeScript](https://www.typescriptlang.org/) and exports all relevant typings for full IDE support.

## API Reference

### `parse(script: string) => { ast: Script | null, errors: ParseError[] }`

Parses an RMS script string and returns an Abstract Syntax Tree or null if parsing fails.

**Parameters:**
- `script` - The RMS script content as a string

**Returns:**
- `ast` - The parsed Abstract Syntax Tree or null if parsing failed
- `errors` - Array of parse errors if any occurred

### `lint(ast: Script) => LintError[]`

Lints a parsed AST and returns an array of linting errors.

**Parameters:**
- `ast` - The parsed Abstract Syntax Tree

**Returns:**
- Array of linting errors found in the AST

### Types

- `Script` - The root AST node representing a complete RMS script
- `ParseError` - Error object with message, line, column, and text properties
- `LintError` - Linting error with message, line, and rule information

For detailed API documentation, see the [docs](./docs/) directory.

## Performance

The modernized parser offers significant performance improvements:

- **35% smaller bundle size** compared to the original parser
- **Fast parsing** with average parse time under 1ms for typical RMS files
- **Optimized bundling** with esbuild for minimal overhead
- **Tree-shaking** support for smaller production builds

### Benchmark Results

```
Large RMS file (50KB): ~0.2ms parse time
Medium RMS file (10KB): ~0.1ms parse time
Small RMS file (1KB): ~0.05ms parse time
```

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

- `npm test` - Run Jest test suite with coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run build` - Build the package with TypeScript and esbuild
- `npm run build:watch` - Build in watch mode for development
- `npm run lint` - Run ESLint on source and test files
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build artifacts
- `npm run health-check` - Verify package integrity

## Contributing

This project is actively maintained and welcomes contributions! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `npm test`
5. Run linting: `npm run lint`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to your branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Development Guidelines

- Follow the existing code style (enforced by ESLint and Prettier)
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PRs
- Use conventional commit messages

### Reporting Issues

Found a bug or have a feature request? Please open an issue with:
- Clear description of the problem or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details (Node.js version, OS, etc.)

## License

[MIT](./LICENSE.md) © Mangudai contributors (original), Austin (modernized)
