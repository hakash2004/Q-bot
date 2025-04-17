const express = require("express");
const router = express.Router();
const Student = require("../models/studentDetails");

// GET student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ student_id: req.params.id });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student", error });
  }
});

// creat

// read

// update

// delete



module.exports = router;
