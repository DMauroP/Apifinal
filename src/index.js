const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productoRoute = require("./routes/producto");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", productoRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose.connect(
  "mongodb+srv://mauricio:asdf1234@cluster0.d57qytk.mongodb.net/dbmensajeria?retryWrites=true&w=majority"
);

// server listening
app.listen(port, () => console.log("Server listening to", port));
