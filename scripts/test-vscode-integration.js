#!/usr/bin/env node

/**
 * VS Code Extension Integration Test
 * Simulates how the VS Code extension would use the parser
 */

const { parse, lint } = require('../dist/index.js')

console.log('🔌 Testing VS Code Extension Integration...\n')

// Simulate VS Code extension usage
function simulateVSCodeExtension(rmsContent) {
  console.log('📝 Simulating VS Code extension with RMS content:')
  console.log('```rms')
  console.log(rmsContent)
  console.log('```\n')
  
  // Step 1: Parse the RMS content (like VS Code would)
  console.log('1️⃣ Parsing RMS content...')
  const { ast, errors } = parse(rmsContent)
  
  if (errors.length > 0) {
    console.log('❌ Parse errors found:')
    errors.forEach((error, index) => {
      console.log(`   ${index + 1}. Line ${error.boundaries.start.line}: ${error.message}`)
    })
    return { success: false, errors, ast: null }
  }
  
  console.log('✅ Parse successful!')
  
  // Step 2: Lint the AST (like VS Code would)
  console.log('2️⃣ Linting AST...')
  const lintErrors = lint(ast)
  
  if (lintErrors.length > 0) {
    console.log('⚠️  Lint warnings found:')
    lintErrors.forEach((error, index) => {
      console.log(`   ${index + 1}. Line ${error.boundaries.start.line}: ${error.message}`)
    })
  } else {
    console.log('✅ No lint warnings!')
  }
  
  // Step 3: Simulate syntax highlighting (AST structure)
  console.log('3️⃣ AST Structure:')
  console.log(`   Root node type: ${ast.type}`)
  console.log(`   Number of children: ${ast.children ? ast.children.length : 0}`)
  
  if (ast.children) {
    ast.children.forEach((child, index) => {
      console.log(`   Child ${index + 1}: ${child.type}`)
    })
  }
  
  return { success: true, errors: [], ast, lintErrors }
}

// Test cases
const testCases = [
  {
    name: 'Simple RMS',
    content: `<PLAYER_SETUP>
  random_placement`
  },
  {
    name: 'Complex RMS',
    content: `<PLAYER_SETUP>
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
  set_place_for_every_player`
  },
  {
    name: 'RMS with Errors',
    content: `<PLAYER_SETUP>
  random_placement

<LAND_GENERATION>
  base_terrain GRASS
  land_percentage 100
  
  invalid_command_here`
  }
]

// Run integration tests
let totalTests = 0
let successfulTests = 0

for (const testCase of testCases) {
  console.log(`\n🧪 Testing: ${testCase.name}`)
  console.log('=' .repeat(50))
  
  totalTests++
  const result = simulateVSCodeExtension(testCase.content)
  
  if (result.success) {
    successfulTests++
    console.log(`✅ ${testCase.name} - Integration successful`)
  } else {
    console.log(`❌ ${testCase.name} - Integration failed`)
  }
  
  console.log('')
}

// Summary
console.log('📊 Integration Test Summary:')
console.log(`✅ Successful: ${successfulTests}`)
console.log(`❌ Failed: ${totalTests - successfulTests}`)
console.log(`📈 Success rate: ${((successfulTests / totalTests) * 100).toFixed(1)}%`)

if (successfulTests === totalTests) {
  console.log('\n🎉 All integration tests passed!')
  console.log('🚀 Parser is ready for VS Code extension integration!')
  console.log('\n📋 Next steps:')
  console.log('1. Use npm link to connect the parser to your VS Code extension')
  console.log('2. Test the extension with real RMS files')
  console.log('3. Verify syntax highlighting and error reporting work correctly')
} else {
  console.log('\n⚠️  Some integration tests failed.')
  console.log('🔧 Please check the parser implementation before integrating with VS Code extension.')
}
