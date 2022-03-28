const express = require("express");

// const of products call from faker on the back end now

// init express app
const app = express();
const port = 5000;
// home route
app.get("/", (req, res) => {
  res.send("API is running.....");
});
// products route - add this to the url and will see the products in JSON file
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});
// kick off server
app.listen(5000, console.log(`Server is running on http://localhost:${port}`));
