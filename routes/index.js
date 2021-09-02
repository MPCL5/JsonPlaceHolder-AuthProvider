const { default: axios } = require("axios");
var express = require("express");
const { HttpErros } = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendOK({ foo: "bar" });
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (
    !!username &&
    !!password &&
    username === "admin" &&
    password === "admin"
  ) {
    const dataPromise = axios.get("/users/1");
    const token = jwt.sign({ username }, process.env.JWT_KEY);
    res.sendOK({
      token,
      user: (await dataPromise).data,
    });
  } else {
    res.sendError(HttpErros.UNPROCESSABLE_ENTITY);
  }
});

module.exports = router;
