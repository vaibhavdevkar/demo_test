const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));


const PORT = 4000

app.get("/api/user", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Vaibhav",
  });
});

app.post("/api/user", (req, res) => {
  const data = req.body;

  console.log("Received Data:", req.body);

  res.status(200).json({
    success: true,
    message: "Data received successfully",
    user: {
      data
    },
  });
});


function login() {
  console.log("Login feature developed");
}

login();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  console.log("Hello")
});

