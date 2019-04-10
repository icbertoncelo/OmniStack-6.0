const express = require("express");
const mongoose = require("mongoose");

// Connect to Database
const db =
  "mongodb://Ian_Carlos:iancarlos1234@ds235431.mlab.com:35431/omnistack";
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB Ok");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
