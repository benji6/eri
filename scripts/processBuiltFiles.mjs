import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const distPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "dist",
);

const recursiveMapOverFilesByExtension =
  (extension) => (f) => async (pathToCheck) => {
    for (const name of await fs.readdir(pathToCheck)) {
      const nextPath = path.join(pathToCheck, name);

      if ((await fs.lstat(nextPath)).isDirectory()) {
        recursiveMapOverFilesByExtension(extension)(f)(nextPath);
      } else if (nextPath.endsWith(`.${extension}`)) {
        const file = await fs.readFile(nextPath, "utf8");
        fs.writeFile(nextPath, f(file));
      }
    }
  };

const recursiveMapOverDefinitionFiles =
  recursiveMapOverFilesByExtension("d.ts");
const recursiveMapOverJsFiles = recursiveMapOverFilesByExtension("js");

const removeLines = (f) => (fileText) =>
  fileText
    .split("\n")
    .filter((line) => !f(line.trim()))
    .join("\n");

const removeCssImportLines = removeLines(
  (trimmedLine) =>
    trimmedLine.startsWith("import") && trimmedLine.endsWith('.css";'),
);

const renameTsUrls = (fileText) =>
  fileText.replace(/(new +URL\("\w+\.)(ts)(")/g, "$1js$3");

const processJsFiles = (fileText) =>
  renameTsUrls(removeCssImportLines(fileText));

recursiveMapOverDefinitionFiles(removeCssImportLines)(distPath);
recursiveMapOverJsFiles(processJsFiles)(distPath);
