const express = require("express");
// env
const dotenv = require("dotenv");
// get dummy products from the file
// const products = require("./data/products");
// bring in dotenv
dotenv.config();

// init express app
const app = express();

// home route
app.get("/", (req, res) => {
  res.send("API is running.....");
});
// products route - add this to the url and will see the products in JSON file
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
// putting prot into const
const PORT = process.env.PORT || 5000;

// kick off server
app.listen(
  5000,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
  )
);
