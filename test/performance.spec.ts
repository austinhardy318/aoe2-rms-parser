import { parse, lint } from '../dist'
import { readFileSync } from 'fs'
import { join } from 'path'

describe('Performance', () => {
  const largeRmsPath = join(__dirname, 'samples', 'large.rms')
  const largeRmsContent = readFileSync(largeRmsPath, 'utf-8')

  test('should parse large RMS file quickly', () => {
    const startTime = performance.now()
    const result = parse(largeRmsContent)
    const endTime = performance.now()
    
    const parseTime = endTime - startTime
    
    expect(result.errors).toHaveLength(0)
    expect(parseTime).toBeLessThan(1000) // Should parse in under 1 second
    expect(result.ast).toBeDefined()
  })

  test('should lint large RMS file quickly', () => {
    const { ast } = parse(largeRmsContent)
    expect(ast).toBeDefined()
    
    const startTime = performance.now()
    const lintErrors = lint(ast!)
    const endTime = performance.now()
    
    const lintTime = endTime - startTime
    
    expect(lintTime).toBeLessThan(500) // Should lint in under 500ms
    expect(Array.isArray(lintErrors)).toBe(true)
  })

  test('should handle multiple parse operations efficiently', () => {
    const iterations = 10
    const startTime = performance.now()
    
    for (let i = 0; i < iterations; i++) {
      const result = parse(largeRmsContent)
      expect(result.errors).toHaveLength(0)
    }
    
    const endTime = performance.now()
    const avgTime = (endTime - startTime) / iterations
    
    expect(avgTime).toBeLessThan(200) // Average should be under 200ms
  })
})
