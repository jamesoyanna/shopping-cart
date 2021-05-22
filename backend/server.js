require("dotenv").config()
 const express  = require("express");
const connectDB = require("./config/db.js")
const app = express();

connectDB();
app.get("/", (req, res) => {
    res.send("I am doings")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));