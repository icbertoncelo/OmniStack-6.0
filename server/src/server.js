const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors);

const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connect", box => {
    socket.join(box);
  });
});

// Connect to Database
const db =
  "mongodb://Ian_Carlos:iancarlos1234@ds235431.mlab.com:35431/omnistack";
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB Ok");
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

const port = 5000;

server.listen(port, () => console.log(`Server running on port ${port}`));
