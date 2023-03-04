const mongoose = require("mongoose");

const empSchema = new mongoose.Schema(
  {
    profile: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    post: { type: String, require: true },
  },

  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Emp", empSchema);
