const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  isUsed: { type: Boolean, default: false },
  time: { type: Date, default: Date.now },
});

const Code = mongoose.model("Code", codeSchema);

module.exports = Code;
