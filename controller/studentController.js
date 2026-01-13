import Student from "../model/Student.js";
import Class from "../model/Class.js";
import Grade from "../model/Grades.js";
import { v4 as uuidv4 } from "uuid";


export const createStudent = async (req, res) => {
  try {
    const { name, email, classId } = req.body;

    const classExists = await Class.findById(classId);
    if (!classExists)
      return res.status(404).json({ message: "Class not found" });

    const student = await Student.create({
      studentId: uuidv4().split("-")[0],
      name,
      email,
      class: classId
    });

    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("class");
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("class");
    if (!student)
      return res.status(404).json({ message: "Student not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!student)
      return res.status(404).json({ message: "Student not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student)
      return res.status(404).json({ message: "Student not found" });

    await Grade.deleteMany({ student: student._id });

    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const addGrade = async (req, res) => {
  const { studentId, subject, score } = req.body;
  const grade = await Grade.create({ student: studentId, subject, score });
  res.status(201).json(grade);
};

export const getGPA = async (req, res) => {
  const grades = await Grade.find({ student: req.params.id });

  if (grades.length === 0) return res.json({ gpa: 0 });

  const avg =
    grades.reduce((sum, g) => sum + g.score, 0) / grades.length;

  res.json({ gpa: avg.toFixed(2) });
};


export const getGradesByStudent = async (req, res) => {
  try {
    const grades = await Grade.find({ student: req.params.studentId });
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
