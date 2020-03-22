const favicons = require("favicons");
const fs = require("fs");
const path = require("path");

const iconsPath = path.join(__dirname, "..", "docs", "icons");
const source = path.join(iconsPath, "icon.svg");

const configuration = {
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    windows: false,
    yandex: false,
  },
  online: false,
  preferOnline: false,
};

favicons(source, configuration, (err, response) => {
  if (err) throw err;
  const { contents, name } = response.images.find(
    ({ name }) => name === "favicon.ico"
  );
  fs.writeFile(path.join(iconsPath, name), contents, (err) => {
    if (err) throw err;
  });
});
