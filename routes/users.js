const { default: axios } = require("axios");
const express = require("express");
const withAuthBearer = require("../controllers/withAuthBearer");
const router = express.Router();

/* GET users listing. */
router.get("/", withAuthBearer, async (_, res) => {
  try {
    const response = await axios.get("/users");
    res.sendOK(response.data);
  } catch {
    res.sendError();
  }
});

/* GET users details. */
router.get("/:id", withAuthBearer, async (req, res) => {
  try {
    const response = await axios.get("/users/" + req.params.id);
    res.sendOK(response.data);
  } catch {
    res.sendError();
  }
});

router.post("/:id", withAuthBearer, async (_, res) => {
  try {
    res.sendOK({ Success: "Ok" });
  } catch {
    res.sendError();
  }
});

module.exports = router;
