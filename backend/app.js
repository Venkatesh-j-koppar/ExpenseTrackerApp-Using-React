const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const app = express();
const { readdirSync } = require("fs");

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((routes) => {
  return app.use("/api/v1", require("./routes/" + routes));
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Listening to port:", PORT);
  });
};

server();
