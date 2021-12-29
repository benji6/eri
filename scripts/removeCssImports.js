const fs = require("fs").promises;
const path = require("path");

const distPath = path.join(__dirname, "..", "dist");
const esmPath = path.join(__dirname, "..", "esm");

const recursiveMapOverFilesByExtension =
  (extension) => (f) => async (pathToCheck) => {
    for (const name of await fs.readdir(pathToCheck)) {
      const nextPath = path.join(pathToCheck, name);

      if ((await fs.lstat(nextPath)).isDirectory()) {
        recursiveMapOverDefinitionFiles(f)(nextPath);
      } else if (nextPath.endsWith(`.${extension}`)) {
        const file = await fs.readFile(nextPath, "utf8");
        fs.writeFile(nextPath, f(file));
      }
    }
  };

const removeLines = (f) => (definition) =>
  definition
    .split("\n")
    .filter((line) => !f(line.trim()))
    .join("\n");

const recursiveMapOverDefinitionFiles =
  recursiveMapOverFilesByExtension("d.ts");

const recursiveRemoveDefinitionCssImports = recursiveMapOverDefinitionFiles(
  removeLines(
    (trimmedLine) =>
      trimmedLine.startsWith("import") && trimmedLine.endsWith('.css";')
  )
);
recursiveRemoveDefinitionCssImports(distPath);
recursiveRemoveDefinitionCssImports(esmPath);

const recursiveMapOverJsFiles = recursiveMapOverFilesByExtension("js");

recursiveMapOverJsFiles(
  removeLines(
    (trimmedLine) =>
      trimmedLine.startsWith("import") && trimmedLine.endsWith('.css";')
  )
)(esmPath);

recursiveMapOverJsFiles(
  removeLines(
    (trimmedLine) =>
      trimmedLine.startsWith('require("') && trimmedLine.endsWith('.css");')
  )
)(distPath);
