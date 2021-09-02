const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

router.get("/", async (_, res) => {
  try {
    const data = await axios.get("/posts");
    res.sendOK(data.data);
  } catch {
    res.sendError();
  }
});

module.exports = router;
