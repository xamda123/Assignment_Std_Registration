import express from 'express';
const router=express.Router();
import { getAllStudents,getUserById,
  createStudent,updateStudent,
  deleteStudent } from '../controller/uuthcontroller.js';

  router.get('/',getAllStudents);
  router.get('/:id',getUserById);
  router.post('/',createStudent);
  router.put('/:id',updateStudent);
  router.delete('/:id',deleteStudent);

  export default router;