const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {type: "string", required: true },
    last_name: {type: "string", required: true },
    email: {type: "string", required: false },
    gender: {type: "string", required: false },
    ip_address: {type: "number", required: false},
    age: {type: "number", required: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
