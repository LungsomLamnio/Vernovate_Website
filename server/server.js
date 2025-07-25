const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("root directory");
});

app.listen(3000, () => {
  console.log("server is running on port: http://localhost:3000");
});
