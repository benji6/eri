const fs = require("fs").promises;
const path = require("path");

const recursiveMapOverDefinitionFiles = async (f, pathToCheck) => {
  for (const name of await fs.readdir(pathToCheck)) {
    const nextPath = path.join(pathToCheck, name);

    if ((await fs.lstat(nextPath)).isDirectory()) {
      recursiveMapOverDefinitionFiles(f, nextPath);
    } else if (nextPath.endsWith(".d.ts")) {
      const file = await fs.readFile(nextPath, "utf8");
      fs.writeFile(nextPath, f(file));
    }
  }
};

const removeCssImports = (definition) =>
  definition
    .split("\n")
    .filter((line) => {
      const trimmedLine = line.trim();
      return !(
        trimmedLine.startsWith("import") && trimmedLine.endsWith(".css';")
      );
    })
    .join("\n");

const recursiveRemoveCssImports = recursiveMapOverDefinitionFiles.bind(
  null,
  removeCssImports
);

recursiveRemoveCssImports(path.join(__dirname, "..", "dist"));
recursiveRemoveCssImports(path.join(__dirname, "..", "esm"));
