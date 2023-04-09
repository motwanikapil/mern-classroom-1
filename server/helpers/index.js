"use strict";

const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const fileRoutes = require("../routes/upload.routes");

require("./database")();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", fileRoutes.routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.listen(port, () => console.log(`Server started at port : ${port}`));
