# VS Code Extension Integration Guide

This guide shows you how to test the aoe2-rms-parser with the VS Code extension without publishing to npm.

## 🚀 Quick Start

### Method 1: npm link (Recommended)

```bash
# 1. Build the parser
npm run build

# 2. Create global link
npm link

# 3. In your VS Code extension directory
npm link aoe2-rms-parser

# 4. Test the extension
code . # Open VS Code with your extension
```

### Method 2: File Path Dependency

```bash
# 1. In your VS Code extension's package.json
{
  "dependencies": {
    "aoe2-rms-parser": "file:../aoe2-rms-parser"
  }
}

# 2. Install
npm install

# 3. Test
code .
```

## 🧪 Testing Scripts

### Test the Parser Standalone
```bash
npm run test:parser
```

### Test VS Code Integration
```bash
npm run test:vscode
```

### Health Check
```bash
npm run health-check
```

## 📁 Project Structure for Testing

```
your-workspace/
├── aoe2-rms-parser/          # This parser project
│   ├── dist/
│   │   ├── index.js          # Built parser
│   │   └── index.d.ts        # TypeScript definitions
│   └── scripts/
│       ├── test-parser.js    # Parser tests
│       └── test-vscode-integration.js
└── vscode-extension/         # Your VS Code extension
    ├── package.json
    └── src/
```

## 🔧 VS Code Extension Integration

### Update package.json
```json
{
  "dependencies": {
    "aoe2-rms-parser": "file:../aoe2-rms-parser"
  }
}
```

### Update imports
```typescript
// Before
import { parse, lint } from 'mangudai'

// After
import { parse, lint } from 'aoe2-rms-parser'
```

### Example usage in extension
```typescript
import { parse, lint } from 'aoe2-rms-parser'

export function validateRMSDocument(document: TextDocument) {
  const content = document.getText()
  const { ast, errors } = parse(content)
  
  if (errors.length > 0) {
    // Handle parse errors
    return errors.map(error => ({
      range: new Range(
        error.boundaries.start.line - 1,
        error.boundaries.start.col - 1,
        error.boundaries.end.line - 1,
        error.boundaries.end.col - 1
      ),
      message: error.message,
      severity: DiagnosticSeverity.Error
    }))
  }
  
  if (ast) {
    const lintErrors = lint(ast)
    // Handle lint warnings
    return lintErrors.map(error => ({
      range: new Range(
        error.boundaries.start.line - 1,
        error.boundaries.start.col - 1,
        error.boundaries.end.line - 1,
        error.boundaries.end.col - 1
      ),
      message: error.message,
      severity: DiagnosticSeverity.Warning
    }))
  }
  
  return []
}
```

## 🐳 Docker Testing

### Test with Docker
```bash
# Build and test in Docker
docker-compose run build
docker-compose run test

# Test parser scripts
docker-compose run test npm run test:parser
docker-compose run test npm run test:vscode
```

## 📊 Performance Testing

The parser includes performance tests that verify:
- Large RMS files parse quickly (< 1 second)
- Linting is fast (< 500ms)
- Multiple operations are efficient

## 🔍 Debugging

### Check if parser is working
```bash
node -e "
const { parse, lint } = require('./dist/index.js');
const result = parse('<PLAYER_SETUP>\nrandom_placement');
console.log('Parse result:', JSON.stringify(result, null, 2));
"
```

### Check VS Code extension integration
```bash
# In VS Code extension directory
node -e "
const { parse, lint } = require('aoe2-rms-parser');
console.log('Parser loaded successfully!');
"
```

## 🚨 Troubleshooting

### Parser not found
- Make sure you've built the parser: `npm run build`
- Check that `dist/index.js` exists
- Verify the file path in package.json is correct

### TypeScript errors
- Make sure `dist/index.d.ts` exists
- Check that the parser exports match what you're importing

### Performance issues
- Run `npm run test:parser` to check performance
- Consider using the minified build for production

## 📝 Sample RMS Files for Testing

Create these test files to verify the extension works:

### test.rms
```rms
<PLAYER_SETUP>
  random_placement

<LAND_GENERATION>
  base_terrain GRASS
  land_percentage 100
```

### complex.rms
```rms
<PLAYER_SETUP>
  random_placement

<LAND_GENERATION>
  base_terrain GRASS
  land_percentage 100
  
  create_connectivity_through_all_players
  assign_to_player 1
  assign_to_player 2

<OBJECTS_GENERATION>
  create_object TREE1
  number_of_objects 50
  set_place_for_every_player
```

### error.rms
```rms
<PLAYER_SETUP>
  random_placement

<LAND_GENERATION>
  base_terrain GRASS
  land_percentage 100
  
  invalid_command_here
```

## ✅ Success Checklist

- [ ] Parser builds successfully
- [ ] All tests pass
- [ ] VS Code extension can import the parser
- [ ] RMS files parse correctly
- [ ] Error messages are helpful
- [ ] Performance is acceptable
- [ ] TypeScript definitions work

## 🎉 Ready for Production

Once testing is complete:
1. Publish to npm: `npm publish`
2. Update VS Code extension to use published version
3. Test with real RMS files from the community
4. Monitor performance and error reports

---

**Need help?** Check the test scripts or run `npm run health-check` for diagnostics.
