const mongoose = require("mongosse");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unidue: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user",userSchema);
