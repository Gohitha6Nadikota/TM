const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoDB =
  "mongodb+srv://hemanthchandra969:hemanthchandra969@cluster0.fxgd8ya.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.error(`MongoDB connection error: ${err}`));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
});

const User = mongoose.model("User", UserSchema);

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && password === user.password) {
      const token = jwt.sign({ username }, "your-secret-key", {
        expiresIn: "1h",
      });
      return res.json({ token });
    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({ username, password, firstName, lastName });
    await user.save();

    return res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, () => console.log("Server started on port 3001"));
