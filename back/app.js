const express = require("express");
const cors = require("cors");
const heroesRoutes = require("./routes/heroes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/heroes", heroesRoutes);

module.exports = app;
