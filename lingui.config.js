const formatJson = require("@lingui/format-json");

console.log(formatJson.formatter)
module.exports = {
    locales: ["en", "cs", "fr"],
    sourceLocale: "en",
    catalogs: [
      {
        path: "<rootDir>/locales/{locale}/{name}/messages",
        include: ["pages/{name}"],
      },
    ],
    format: formatJson.formatter({style: "lingui"}),
  };