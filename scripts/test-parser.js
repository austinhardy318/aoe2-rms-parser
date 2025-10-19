#!/usr/bin/env node

/**
 * Test script for aoe2-rms-parser
 * Tests the parser with sample RMS files to ensure it works correctly
 */

const { parse, lint } = require('../dist/index.js')
const fs = require('fs')
const path = require('path')

console.log('🧪 Testing aoe2-rms-parser...\n')

// Test cases
const testCases = [
  {
    name: 'Basic RMS',
    content: `<PLAYER_SETUP>
  random_placement

<LAND_GENERATION>
  base_terrain GRASS
  land_percentage 100`
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
    name: 'Invalid RMS',
    content: `<PLAYER_SETUP>
  random_placement

<LAND_GENERATION>
  base_terrain GRASS
  land_percentage 100
  
  invalid_command_here`
  }
]

// Run tests
let passed = 0
let failed = 0

for (const testCase of testCases) {
  console.log(`Testing: ${testCase.name}`)
  
  try {
    const { ast, errors } = parse(testCase.content)
    
    if (testCase.name === 'Invalid RMS') {
      // Should have errors
      if (errors.length > 0) {
        console.log(`✅ ${testCase.name} - Correctly detected errors:`, errors.length)
        passed++
      } else {
        console.log(`❌ ${testCase.name} - Should have errors but didn't`)
        failed++
      }
    } else {
      // Should parse successfully
      if (errors.length === 0 && ast) {
        console.log(`✅ ${testCase.name} - Parsed successfully`)
        
        // Test linting
        const lintErrors = lint(ast)
        console.log(`   Lint errors: ${lintErrors.length}`)
        passed++
      } else {
        console.log(`❌ ${testCase.name} - Parse failed:`, errors)
        failed++
      }
    }
  } catch (error) {
    console.log(`❌ ${testCase.name} - Exception:`, error.message)
    failed++
  }
  
  console.log('')
}

// Performance test
console.log('🚀 Performance test...')
const largeContent = testCases[1].content.repeat(10) // Make it larger
const startTime = performance.now()

for (let i = 0; i < 100; i++) {
  parse(largeContent)
}

const endTime = performance.now()
const avgTime = (endTime - startTime) / 100

console.log(`Average parse time: ${avgTime.toFixed(2)}ms`)
console.log('')

// Summary
console.log('📊 Test Summary:')
console.log(`✅ Passed: ${passed}`)
console.log(`❌ Failed: ${failed}`)
console.log(`📈 Success rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`)

if (failed === 0) {
  console.log('\n🎉 All tests passed! Parser is ready for VS Code extension testing.')
  process.exit(0)
} else {
  console.log('\n⚠️  Some tests failed. Please check the parser implementation.')
  process.exit(1)
}
