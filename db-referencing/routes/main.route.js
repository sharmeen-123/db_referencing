const express = require("express");
const staffRouter = require("./staff.route");
const rightRouter = require("./right.route");
const authGuard = require("../middleware/authGuard.middleware");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from server");
});

router.use("/staff", staffRouter);
router.use("/right", rightRouter);

module.exports = router;

