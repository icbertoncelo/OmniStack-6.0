const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoxSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Box", BoxSchema);
