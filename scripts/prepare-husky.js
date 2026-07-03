#!/usr/bin/env node

const { execSync } = require('child_process')
const { existsSync } = require('fs')
const { join } = require('path')

if (process.env.HUSKY === '0') {
  process.exit(0)
}

const huskyBin = join(__dirname, '..', 'node_modules', '.bin', 'husky')
if (!existsSync(huskyBin)) {
  process.exit(0)
}

execSync('husky', { stdio: 'inherit' })
