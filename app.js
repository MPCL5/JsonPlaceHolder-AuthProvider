const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const postsRotuer = require("./routes/posts");
const { errorHandler } = require("./utils/ErrorHandler");
const { responseHandler } = require("./utils/ResponseHandler");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(responseHandler());
app.use(errorHandler());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRotuer);

module.exports = app;
