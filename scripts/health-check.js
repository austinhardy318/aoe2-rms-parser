#!/usr/bin/env node

/**
 * Health check script for aoe2-rms-parser
 * Verifies that the package is working correctly
 */

const { parse, lint } = require('../dist/index.js')

console.log('🔍 Running health check for aoe2-rms-parser...\n')

// Test 1: Basic parsing
console.log('1. Testing basic parsing...')
try {
  const { ast, errors } = parse('<PLAYER_SETUP>\nrandom_placement')
  if (errors.length > 0) {
    console.error('❌ Basic parsing failed:', errors)
    process.exit(1)
  }
  if (!ast) {
    console.error('❌ No AST generated')
    process.exit(1)
  }
  console.log('✅ Basic parsing works')
} catch (error) {
  console.error('❌ Basic parsing error:', error.message)
  process.exit(1)
}

// Test 2: Linting
console.log('2. Testing linting...')
try {
  const { ast } = parse('<PLAYER_SETUP>\nrandom_placement')
  const lintErrors = lint(ast)
  if (!Array.isArray(lintErrors)) {
    console.error('❌ Linting did not return an array')
    process.exit(1)
  }
  console.log('✅ Linting works')
} catch (error) {
  console.error('❌ Linting error:', error.message)
  process.exit(1)
}

// Test 3: Error handling
console.log('3. Testing error handling...')
try {
  const { errors } = parse('invalid syntax here')
  if (!Array.isArray(errors)) {
    console.error('❌ Error handling did not return an array')
    process.exit(1)
  }
  console.log('✅ Error handling works')
} catch (error) {
  console.error('❌ Error handling error:', error.message)
  process.exit(1)
}

// Test 4: Performance check
console.log('4. Testing performance...')
const startTime = performance.now()
for (let i = 0; i < 100; i++) {
  parse('<PLAYER_SETUP>\nrandom_placement')
}
const endTime = performance.now()
const avgTime = (endTime - startTime) / 100

if (avgTime > 10) {
  console.warn(`⚠️  Performance warning: Average parse time is ${avgTime.toFixed(2)}ms (expected < 10ms)`)
} else {
  console.log('✅ Performance is good')
}

console.log('\n🎉 All health checks passed!')
console.log(`📊 Average parse time: ${avgTime.toFixed(2)}ms`)
console.log('📦 Package is ready for use!')
