const fs = require('fs')
const path = require('path')

const distPath = path.join(__dirname, '..', 'dist')

const definition = fs.readFileSync(path.join(distPath, 'eri.d.ts'), 'utf-8')
  .split('\n')
  .filter(line => !(line.trim().startsWith('import') && line.endsWith(".css';")))
  .join('\n')

fs.writeFileSync(path.join(distPath, 'index.d.ts'), definition)
