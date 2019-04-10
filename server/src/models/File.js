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
  const url = process.env.URL || "http://localhost:5000";
  return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", FileSchema);
