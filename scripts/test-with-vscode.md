# Testing aoe2-rms-parser with VS Code Extension

## Method 1: npm link (Recommended)

### Step 1: Link the parser package
```bash
# In the aoe2-rms-parser directory
npm link

# This creates a global symlink to your local package
```

### Step 2: Link in the VS Code extension
```bash
# In the VS Code extension directory
npm link aoe2-rms-parser

# This creates a symlink to your local package
```

### Step 3: Test the extension
1. Open VS Code
2. Load the extension workspace
3. Test with RMS files
4. Any changes to the parser will be reflected immediately

### Step 4: Unlink when done
```bash
# In the VS Code extension directory
npm unlink aoe2-rms-parser

# In the aoe2-rms-parser directory
npm unlink
```

## Method 2: Local file path dependency

### In the VS Code extension's package.json:
```json
{
  "dependencies": {
    "aoe2-rms-parser": "file:../aoe2-rms-parser"
  }
}
```

### Then run:
```bash
npm install
```

## Method 3: Docker-based testing

### Create a test workspace with both projects:
```bash
mkdir aoe2-test-workspace
cd aoe2-test-workspace
git clone <your-vscode-extension-repo> vscode-extension
git clone <your-parser-repo> aoe2-rms-parser
```

### Use docker-compose to test both together:
```yaml
# docker-compose.test.yml
version: '3.8'
services:
  parser:
    build: ./aoe2-rms-parser
    volumes:
      - ./aoe2-rms-parser:/app
    command: npm run build:watch

  extension:
    build: ./vscode-extension
    volumes:
      - ./vscode-extension:/app
      - ./aoe2-rms-parser:/app/node_modules/aoe2-rms-parser
    depends_on:
      - parser
```

## Method 4: Development build with watch mode

### In aoe2-rms-parser:
```bash
npm run build:watch
```

### In VS Code extension:
```bash
# Use file path dependency
npm install file:../aoe2-rms-parser
```

### The parser will rebuild automatically when you make changes!

## Method 5: Test with sample RMS files

### Create test RMS files:
```rms
# test.rms
<PLAYER_SETUP>
  random_placement

<LAND_GENERATION>
  base_terrain GRASS
  land_percentage 100
```

### Test parsing:
```bash
# In aoe2-rms-parser directory
node -e "
const { parse, lint } = require('./dist/index.js');
const fs = require('fs');
const content = fs.readFileSync('test.rms', 'utf8');
const result = parse(content);
console.log('Parse result:', JSON.stringify(result, null, 2));
if (result.ast) {
  const lintErrors = lint(result.ast);
  console.log('Lint errors:', lintErrors);
}
"
```

## Troubleshooting

### If linking doesn't work:
1. Make sure both packages are built
2. Check that the parser exports are correct
3. Verify the VS Code extension is looking for the right package name

### If file path doesn't work:
1. Make sure the path is correct (relative or absolute)
2. Run `npm install` after changing package.json
3. Check that the parser is built in the dist/ directory

### If Docker doesn't work:
1. Make sure both Dockerfiles are correct
2. Check that volumes are mounted properly
3. Verify the extension can find the parser module
