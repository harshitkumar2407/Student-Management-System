require("dotenv").config();

const app = require("./src/app");
const mongoose = require("mongoose");
const connectToDb = require("./src/config/database");

connectToDb();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Student Management System API");
});


app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
