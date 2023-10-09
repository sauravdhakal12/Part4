const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogRouter = require("./controller/blogs");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const config = require("./utils/config");

mongoose.set("strictQuery", false);
logger.info("Connecting to mongoDB");

mongoose
  .connect(config.MONGODB_URL)
  .then((res) => {
    logger.info("Connected");
  })
  .catch((err) => {
    logger.error("Couldn't connect");
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blog", blogRouter);

app.use(middleware.unknownEndpoint);

module.exports = app;
