const express = require("express");
const { roomController } = require("./room.controller");
const router = express.Router();

router.get("/", roomController.getAllRooms);
router.get("/:id", roomController.getSingleRoom);
router.post("/create-new", roomController.createNew);

module.exports.roomRoutes = router;
