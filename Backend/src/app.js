// require("dotenv").config()
// require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const authRouter = require("./routes/auth.routes");


const app = express();
app.use(express.json());
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173"
 
}));

app.use("/api",authRouter);

module.exports = app;