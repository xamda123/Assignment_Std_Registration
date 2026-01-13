import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  addGrade,
  getGPA,
  getGradesByStudent
} from "../controller/studentController.js";

const router = express.Router();


router.post("/grade", addGrade);
router.get("/:studentId/grades", getGradesByStudent);
router.get("/:id/gpa", getGPA);


router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
