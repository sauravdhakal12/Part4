const logger = require("./utils/logger");
const config = require("./utils/config");
const app = require("./app");

app.listen(3000, () => {
  logger.info(`Connected to port ${config.PORT}`);
});
