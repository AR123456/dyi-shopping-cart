const express = require("express");

// const of products call from faker on the back end now

// init express app
const app = express();
const port = 5000;
// home route
app.get("/", (req, res) => {
  res.send("API is running.....");
});

// kick off server
app.listen(5000, console.log(`Server is running on http://localhost:${port}`));
