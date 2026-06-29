require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./config/db");

const villageRoutes = require("./routes/villageRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

  res.json({

    success: true,

    message: "Haryana Village Portal Backend Running"

  });

});

app.use("/villages", villageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`🚀 Server running on port ${PORT}`);

});