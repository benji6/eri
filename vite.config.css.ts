import { readFileSync } from "fs";
import { resolve } from "path";
import { defineConfig, type Plugin } from "vite";

function emitFontAsset(): Plugin {
  return {
    name: "emit-font-asset",
    enforce: "post",
    generateBundle(_options, bundle) {
      this.emitFile({
        type: "asset",
        fileName: "Mona-Sans.woff2",
        source: readFileSync(resolve("src/Mona-Sans.woff2")),
      });
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "asset" && chunk.fileName.endsWith(".css")) {
          const css =
            typeof chunk.source === "string"
              ? chunk.source
              : Buffer.from(chunk.source).toString();
          chunk.source = css.replace(
            /url\(data:font\/woff2;base64,[A-Za-z0-9+/=]+\)/g,
            'url("Mona-Sans.woff2")',
          );
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [emitFontAsset()],
  build: {
    lib: {
      entry: "src/index.ts",
      cssFileName: "style",
      formats: ["es"],
      fileName: "eri",
    },
    outDir: "dist",
    emptyOutDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-transition-state",
        /^react-router/,
      ],
      output: {
        assetFileNames: "[name][extname]",
      },
    },
  },
});
