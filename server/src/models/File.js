const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

FileSchema.virtual("url").get(function() {
  return `http://localhost:5000/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", FileSchema);
