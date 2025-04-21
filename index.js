const createHandler = require("azure-function-express").createHandler;
const expressApp = require("./app");

// 使用 Azure Function Express Bridge
module.exports = createHandler(expressApp);