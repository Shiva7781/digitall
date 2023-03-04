const mongoose = require("mongoose");
require("dotenv").config();

// DeprecationWarning
mongoose.set("strictQuery", true);

module.exports = async () => {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("DB err:", err.message);
    });
};
