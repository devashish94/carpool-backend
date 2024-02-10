const { Schema, model } = require("mongoose");

const rideSchema = Schema(
  {
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
    capacity: {
      type: Number,
      requried: true,
      min: [1, "Capacity must be atleast 1"],
      max: [50, "Capacity cannot exceed 50"],
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      requried: true,
    },
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: "Request",
        unique: true,
      },
    ],
  },
  { timestamps: true }
);

const Ride = model("Ride", rideSchema);
module.exports = Ride;
