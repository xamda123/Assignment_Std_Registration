import { 
  getAllUserModel,
  getUserByIdModel,
  createStudentModel,
  updateStudents,
  deleteStudents 
} from "../model/usermodel.js";


export const getAllStudents = (req, res) => {
  getAllUserModel((err, result) => {
    if (err) {
      return res.status(500).json({ error: "database error" });
    }
    res.json(result);
  });
};


export const getUserById = (req, res) => {
  const userById = req.params.id;
  
  getUserByIdModel(userById, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    
   
    if (result.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
  
    
    res.json(result[0]); 
  });
};


export const createStudent = (req, res) => {
  const body = req.body;
  createStudentModel(body, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "database insert error" });
    }
    res.status(201).json({ 
      message: "Student created successfully", 
      studentId: result.insertId 
    });
  });
};


export const updateStudent = (req, res) => {
  const userId = req.params.id; 
  const body = req.body; 
  updateStudents(userId, body, (err, result) => {
    if (err) {
      console.log("MySQL Error:", err.message);
      return res.status(500).json({ 
        error: "Database update error" ,
        details: err.message
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student updated successfully" });
  });
};


export const deleteStudent = (req, res) => {
  const userId = req.params.id;

  deleteStudents(userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database delete error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  });
};