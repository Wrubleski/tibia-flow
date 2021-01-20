const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  "/static",
  express.static(path.join(__dirname, "../client/build/static"))
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/loot", (req, res) => {
  res.send(true);
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is up and running.");
});
