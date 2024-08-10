const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("This is a test interface");
});



mongoose
  .connect(
    "mongodb+srv://eaelllfaust:yVnrjveko7DUdtT6@cluster0.9jzmj5o.mongodb.net/init-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("failed");
  });
