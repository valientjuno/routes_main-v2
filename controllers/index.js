// controllers/studentController.js
const Student = require("../models/Student"); // Assuming a Mongoose Student model is defined in models/Student.js

const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (Req, res) => {
  res.send("Tooele Tech is Awesome!");
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
    console.log("Students fetched successfully: ", students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
};

// custom page stealth
const gives = (Req, res) => {
  res.send("Only cats stay tough around spiders!");
};

module.exports = { awesomeFunction, tooeleTech, getAllStudents, gives };
