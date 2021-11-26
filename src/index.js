const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ messagen: "Hello word! Ignite"});
  console.log("esta bem");
});

app.listen(3000);