require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors());
app.use(express.json());


connectDB();

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running | PORT : ${PORT}`));
