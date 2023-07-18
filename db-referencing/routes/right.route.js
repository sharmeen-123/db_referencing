const express = require("express");
const rightController = require("../controller/right.controller");

const rightRouter = express.Router();

rightRouter.post("/create", rightController.create);
rightRouter.get("/getRights", rightController.staffByRight);

module.exports =  rightRouter;
