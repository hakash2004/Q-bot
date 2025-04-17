const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true },
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
  },
  enrollment_status: { type: String, enum: ["Enrolled", "Graduated", "Dropped"], required: true },
  gpa: { type: Number, min: 0.0, max: 4.0 },
  attendance_percentage: { type: Number, min: 0, max: 100 },
  courses: [
    {
      course_id: { type: String, required: true },
      course_name: { type: String, required: true },
      credits: { type: Number, required: true },
      grade: { type: String, required: true },
    },
  ],
  fees: {
    total: { type: Number, required: true },
    paid: { type: Number, required: true },
    due: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Student", studentSchema);
