import {
  getAllUserModel,
  getUserByIdModel,
  createStudentModel,
  updateStudents,
  deleteStudents
} from "../model/usermodel.js";

export const getAllStudents = (req, res) => {
  getAllUserModel((err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result);
  });
};

export const getUserById = (req, res) => {
  getUserByIdModel(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length === 0)
      return res.status(404).json({ message: "Student not found" });
    res.json(result[0]);
  });
};

export const createStudent = (req, res) => {
  createStudentModel(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: "Insert error" });
    res.status(201).json({
      message: "Student created",
      studentId: result.insertId
    });
  });
};

export const updateStudent = (req, res) => {
  updateStudents(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: "Update error" });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student updated" });
  });
};

export const deleteStudent = (req, res) => {
  deleteStudents(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: "Delete error" });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted" });
  });
};
