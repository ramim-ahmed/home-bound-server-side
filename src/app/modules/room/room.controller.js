const httpStatus = require("http-status");
const { roomService } = require("./room.servcie");

const createNew = async (req, res) => {
  try {
    const data = req.body;
    const result = await roomService.createNew(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Room Created Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Room Created Failed!!",
      error,
    });
  }
};

const getAllRooms = async (req, res) => {
  try {
    const result = await roomService.getAllRooms();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Rooms Fetch All Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Rooms Fetch All Failed!!",
      error,
    });
  }
};

const getSingleRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await roomService.getSingleRoom(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Room Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Room Fetch Failed!!",
      error,
    });
  }
};

module.exports.roomController = {
  createNew,
  getAllRooms,
  getSingleRoom,
};
