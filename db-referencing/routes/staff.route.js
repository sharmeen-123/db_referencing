const express = require("express");
const staffController = require("../controller/staff.controller");

const staffRouter = express.Router();

staffRouter.post("/create", staffController.create);
// staffRouter.get("/graph", staffController.login);

module.exports =  staffRouter;
