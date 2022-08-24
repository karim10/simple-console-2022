const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  return "Hello World!";
  // res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
