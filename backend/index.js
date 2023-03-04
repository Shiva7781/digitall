const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user.routes");
const empRoute = require("./routes/emp.routes");

app.use("/api/users", userRoute);
app.use("/api/emps", empRoute);

// To see if backend are connected
app.get("/", async (req, res) => {
  return res.send("<h1> You are on home route </h1>");
});

module.exports = app;
