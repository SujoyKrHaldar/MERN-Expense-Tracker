const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
require("colors");

const app = express();
app.use(express.json());

//database connection setup -->
const connectDB = require("./config/db");

//setup config secrets -->
dotenv.config({ path: "./config/config.env" });

// setup routes -->
const transactions = require("./routes/transactions");
app.use("/api/v1/transactions", transactions);

// for development mode -->
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// for production mode -->
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// server port -->
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`.yellow.bold)
);
