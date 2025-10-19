# Mangudai Parser Fork and Modernization Plan

## Executive Summary

This document outlines the strategy for forking the Mangudai parser into a modern, independently maintained project (`aoe2-rms-parser`) while updating the VS Code extension to use the new parser. This approach addresses deprecation warnings, modernizes dependencies, and creates a clean separation of concerns between parsing logic and VS Code integration.

## Current Situation Analysis

### Problems with Current Setup
- **Deprecated Dependencies**: Mangudai v0.2.3 uses outdated packages causing warnings
- **No Active Maintenance**: Original Mangudai repository shows limited recent activity
- **Dependency Bloat**: Extension inherits all parser dependencies
- **Update Blocking**: Can't modernize parser without affecting extension

### Deprecation Warnings from Docker Build
```
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated eslint@8.57.1: This version is no longer supported
```

## Proposed Solution: Dual Project Architecture

### Project Structure
```
aoe2-rms-parser/                    # New parser project
├── src/                           # Parser source code
├── test/                          # Test suite
├── docs/                          # Documentation
├── package.json                   # Modern dependencies
├── tsconfig.json                  # Modern TypeScript config
├── README.md                      # Parser documentation
└── CHANGELOG.md                   # Parser changelog

vscode-aoe2-rms/                   # Existing extension project
├── client/                        # VS Code client
├── server/                        # Language server
├── themes/                        # Custom themes
├── docs/                          # Extension docs
└── package.json                   # Uses aoe2-rms-parser
```

## Phase 1: Parser Fork Creation

### 1.1 Repository Setup
- **Fork Source**: [mangudai/mangudai](https://github.com/mangudai/mangudai)
- **New Repository**: `austinhardy318/aoe2-rms-parser`
- **Naming**: `aoe2-rms-parser` (clearer than "mangudai")
- **License**: MIT (inherit from original)

### 1.2 Initial Configuration
```bash
# Fork on GitHub first, then:
git clone https://github.com/austinhardy318/aoe2-rms-parser.git
cd aoe2-rms-parser
git remote add upstream https://github.com/mangudai/mangudai.git
```

### 1.3 Package Identity Update
```json
{
  "name": "aoe2-rms-parser",
  "version": "2.0.0",
  "description": "Modern parser and linter for Age of Empires 2 Random Map Scripts",
  "author": "Mangudai contributors (original), Austin (modernized)",
  "license": "MIT",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://github.com/austinhardy318/aoe2-rms-parser.git"
  },
  "homepage": "https://github.com/austinhardy318/aoe2-rms-parser",
  "bugs": {
    "url": "https://github.com/austinhardy318/aoe2-rms-parser/issues"
  },
  "keywords": [
    "age-of-empires-2",
    "aoe2",
    "rms",
    "random-map-script",
    "parser",
    "linter",
    "ast"
  ]
}
```

## Phase 2: Dependency Modernization

### 2.1 Remove Deprecated Dependencies
```bash
# Remove problematic packages
npm uninstall inflight rimraf@3.0.2
npm uninstall @humanwhocodes/object-schema @humanwhocodes/config-array
npm uninstall glob@7.2.3 eslint@8.57.1
```

### 2.2 Add Modern Dependencies
```json
{
  "dependencies": {
    // Keep core parsing dependencies
    "nearley": "^2.20.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "jest": "^29.0.0",
    "eslint": "^9.0.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "prettier": "^3.0.0",
    "@types/node": "^20.0.0",
    "rimraf": "^5.0.0",
    "glob": "^10.0.0",
    "esbuild": "^0.19.0"
  }
}
```

### 2.3 Build System Modernization
```json
{
  "scripts": {
    "build": "tsc && esbuild src/index.ts --bundle --outfile=dist/index.js --platform=node --format=cjs",
    "build:watch": "tsc --watch",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix",
    "format": "prettier --write src/**/*.ts",
    "clean": "rimraf dist",
    "prepublishOnly": "npm run clean && npm run build"
  }
}
```

## Phase 3: Code Modernization

### 3.1 TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "test"]
}
```

### 3.2 ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "prefer-const": "error",
    "no-var": "error"
  }
}
```

### 3.3 API Improvements
- **Better Error Messages**: More descriptive error descriptions
- **Enhanced AST**: More detailed syntax tree structure
- **Performance**: Optimize parsing speed
- **Type Safety**: Improve TypeScript definitions

## Phase 4: Testing and Quality Assurance

### 4.1 Test Suite Setup
```json
{
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "testMatch": ["**/test/**/*.test.ts"],
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "coverageReporters": ["text", "lcov"]
  }
}
```

### 4.2 Test Cases
- **Parse Tests**: Valid RMS syntax parsing
- **Error Tests**: Invalid syntax error detection
- **Lint Tests**: Logic error detection
- **Edge Cases**: Complex RMS scenarios
- **Performance Tests**: Large file parsing

### 4.3 CI/CD Pipeline
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

## Phase 5: Extension Integration

### 5.1 Update Extension Dependencies
```json
// vscode-aoe2-rms/server/package.json
{
  "dependencies": {
    "aoe2-rms-parser": "^2.0.0",  // Instead of mangudai@0.2.3
    "vscode-languageserver": "4.2.1"
  }
}
```

### 5.2 Update Import Statements
```typescript
// server/src/server.ts
import { parse, lint, TextSpanError } from 'aoe2-rms-parser'
// Instead of: import { parse, lint, TextSpanError } from 'mangudai'
```

### 5.3 Test Integration
- **Verify Parsing**: Ensure RMS files parse correctly
- **Check Diagnostics**: Confirm error reporting works
- **Performance**: Validate no performance regression
- **Compatibility**: Test with existing RMS files

## Phase 6: Publishing and Distribution

### 6.1 Parser Publishing
```bash
# Publish to npm
npm publish --access public
```

### 6.2 Extension Update
- **Version Bump**: Update extension to use new parser
- **Test Thoroughly**: Verify all functionality works
- **Update Documentation**: Reflect parser change
- **Publish Extension**: Update VSIX package

### 6.3 Documentation
- **Parser README**: Usage examples and API documentation
- **Extension README**: Update to mention modern parser
- **Migration Guide**: Help users understand changes

## Benefits of This Approach

### For the Parser Project
- ✅ **Modern Dependencies**: No deprecation warnings
- ✅ **Better Performance**: Updated build tools and optimizations
- ✅ **Enhanced Features**: Improved error messages and AST
- ✅ **Community Value**: Others can use the modern parser
- ✅ **Maintainable**: Clean, focused codebase
- ✅ **Active Maintenance**: Regular updates and improvements

### For the Extension Project
- ✅ **Clean Dependencies**: No parser maintenance burden
- ✅ **Reliable Updates**: Parser updates independently
- ✅ **Better Integration**: Can request parser features
- ✅ **Focused Development**: Extension-specific features
- ✅ **Reduced Complexity**: Smaller, more focused codebase

### For the Community
- ✅ **Modern Tooling**: Up-to-date parser available
- ✅ **Active Maintenance**: Regular updates and fixes
- ✅ **Better Documentation**: Clear usage examples
- ✅ **Open Source**: Community can contribute
- ✅ **Multiple Use Cases**: Parser can be used in other projects

## Implementation Timeline

### Week 1: Parser Fork Setup
- [ ] Fork Mangudai repository
- [ ] Set up new project structure
- [ ] Update package.json and basic configuration
- [ ] Set up modern build system

### Week 2: Dependency Modernization
- [ ] Remove deprecated dependencies
- [ ] Add modern alternatives
- [ ] Update TypeScript configuration
- [ ] Set up ESLint and Prettier

### Week 3: Code Modernization
- [ ] Update source code for modern dependencies
- [ ] Improve error handling and messages
- [ ] Enhance TypeScript definitions
- [ ] Optimize performance

### Week 4: Testing and Integration
- [ ] Set up comprehensive test suite
- [ ] Test with various RMS files
- [ ] Update extension to use new parser
- [ ] Verify all functionality works

### Week 5: Publishing and Documentation
- [ ] Publish parser to npm
- [ ] Update extension package
- [ ] Create comprehensive documentation
- [ ] Publish updated extension

## Risk Mitigation

### Potential Risks
1. **Breaking Changes**: New parser might have API changes
2. **Compatibility Issues**: Some RMS files might not parse correctly
3. **Performance Regression**: New parser might be slower
4. **Maintenance Burden**: Two projects to maintain

### Mitigation Strategies
1. **Comprehensive Testing**: Extensive test suite with real RMS files
2. **Backward Compatibility**: Maintain same API as original Mangudai
3. **Performance Testing**: Benchmark against original parser
4. **Gradual Migration**: Test thoroughly before switching extension

## Success Metrics

### Parser Project
- [ ] Zero deprecation warnings in build
- [ ] 100% test coverage
- [ ] All original Mangudai tests pass
- [ ] Performance equal or better than original
- [ ] Published to npm successfully

### Extension Project
- [ ] No functionality regression
- [ ] Clean build without warnings
- [ ] All themes work correctly
- [ ] Language server functions properly
- [ ] Published to marketplaces successfully

## Conclusion

Forking the Mangudai parser into a modern, independently maintained project provides the best solution for addressing deprecation warnings while maintaining clean separation of concerns. This approach benefits both the extension project and the broader AoE2 RMS community by providing a modern, well-maintained parser that can be used across multiple projects.

The dual-project architecture allows each component to evolve independently while maintaining tight integration, resulting in a more maintainable and extensible solution overall.
