const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    host: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Room = model("Room", roomSchema);

module.exports = Room;
