const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const { applicationRoutes } = require("./app/routes");
const globalErrorHandler = require("./app/middlewares/globalErrorHandler");
const notFoundHandler = require("./app/middlewares/notFoundHandler");

// backend application
const app = express();

// middlware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Welcome to Home Bound Server!!",
  });
});

app.use("/api/v1", applicationRoutes);

// not found route handler
app.use(notFoundHandler);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
