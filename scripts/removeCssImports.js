const fs = require('fs')
const path = require('path')

const recursiveMapOverDefinitionFiles = (f, pathToCheck) => {
  for (const name of fs.readdirSync(pathToCheck)) {
    const nextPath = path.join(pathToCheck, name)

    if (fs.lstatSync(nextPath).isDirectory()) {
      recursiveMapOverDefinitionFiles(f, nextPath)
    } else if (nextPath.endsWith('.d.ts')) {
      fs.writeFileSync(nextPath, f(fs.readFileSync(nextPath, 'utf-8')))
    }
  }
}

const removeCssImports = definition =>
  definition
    .split('\n')
    .filter(
      line => !(line.trim().startsWith('import') && line.endsWith(".css';")),
    )
    .join('\n')

recursiveMapOverDefinitionFiles(
  removeCssImports,
  path.join(__dirname, '..', 'dist'),
)
