const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/lights/on", (req, res) => {
  res.send("ON endpoint hit");
});

app.get("/lights/off", (req, res) => {
  res.send("OFF endpoint hit");
});

app.listen(3000, () => {
  console.log("Running");
});
