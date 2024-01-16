const express = require("express");
// const crypto = require("crypto");
const router = express.Router();
const Code = require("./model/code");

router.get("/", async (req, res) => {
  try {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let charLength = chars.length;

    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * charLength);
      result += chars[randomIndex];
    }
    const code = await Code.create({ hash: result });
    return res.json({ success: true, code: code });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
});
router.post("/use", async (req, res) => {
  try {
    const hash = req.body.hash;
    const validDurationInSeconds = 60 * 1000;

    const data = await Code.find({ hash });
    if (data.length === 0) {
      throw new Error("Enter a Valid Code");
    }
    if (data[0].isUsed) {
      throw new Error("This code has already been used");
    }
    await Code.findByIdAndUpdate(data[0]._id, { isUsed: true });
    const now = new Date().toISOString();
    const codeDate = data[0].time.toISOString();
    const timeDifference = new Date(now) - new Date(codeDate);
    if (Math.abs(timeDifference) < validDurationInSeconds) {
      return res.send({ valid: true, msg: "Code is correct" });
    } else throw new Error("The Code has Expired");
  } catch (e) {
    res.send({ valid: false, msg: e.message });
  }
});

module.exports = router;
