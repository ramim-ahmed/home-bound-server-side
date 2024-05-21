const Room = require("./room.model");

const createNew = async (data) => {
  const result = await Room.create(data);
  return result;
};

const getAllRooms = async () => {
  const result = await Room.find({});
  return result;
};

const getSingleRoom = async (id) => {
  const result = await Room.findOne({ _id: id });
  return result;
};

module.exports.roomService = {
  createNew,
  getAllRooms,
  getSingleRoom,
};
