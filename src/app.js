require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");
const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./router/todosRouter.js");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL;

const upload = multer({dev: true});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connection.once("open", () => {
  console.log(`connected to server`);
});
mongoose.connection.on("error", (error) => {
  console.error(`error`);
});
app.use("/api/todos", todoRouter);

async function startServer() {
  await mongoose.connect(URL);
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}
startServer();
