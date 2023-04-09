"use strict";

const express = require("express");
const { upload } = require("../helpers/fileHelpers");
const { singleFileUpload } = require("../controllers/fileUploader.controller");
const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);

module.exports = {
  routes: router,
};
