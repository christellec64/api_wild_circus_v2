require("dotenv").config();
const express = require("express");
const sequelize = require("./sequelize");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require("./association");
const port = process.env.PORT || 8080;
const api = require("./api");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use("/api", api);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Wild Circus website server");
});

sequelize
  .sync()
  .then(() => {
    return sequelize.authenticate();
  })
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        throw new Error("Something bad happened...");
      }
      console.log(`Server is listening on ${port}`);
    });
  })
  .catch((err) => {
    console.log("Unable to join  database", err.message);
  });
