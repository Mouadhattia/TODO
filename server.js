var express = require("express");
require("dotenv").config();

var app = express();

var cors = require("cors");

//connect DB

const DBconnect = require("./config/DBconnect");

DBconnect();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/contacts", require("./routes/contact"));

app.get("/", (req, res) => {
  res.send("gett all");
});

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
