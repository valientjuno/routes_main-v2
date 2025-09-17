const express = require("express");
const router = express.Router();

const studentController = require("../controllers/index");

router.get("/", studentController.getAllStudents);

router.get("/:id", studentController.getSingleStudent);

router.post("/", studentController.createStudent);

<<<<<<< Updated upstream
<<<<<<< Updated upstream
router.delete("/delete/:id"), studentController.deleteStudent;

=======
router.delete("/delete/:id", studentController.deleteStudent);
>>>>>>> Stashed changes
=======
router.delete("/delete/:id", studentController.deleteStudent);
>>>>>>> Stashed changes
module.exports = router;
