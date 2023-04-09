"use strict";

const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost:27017/uploads", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};
