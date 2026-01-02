import express from 'express';
const app=express();
import cors from 'cors';
app.use(cors());
app.use(express.json());


import studentRotes from './router/userroutes.js';


app.use('/api/students',studentRotes);

const PORT=process.env.PORT;
app.listen(PORT , ()=>{
  console.log(`app listening on this port ${PORT}`);
});
//http://localhost:7000/api/students       get all
//http://localhost:7000/api/students/4     get by id
// http://localhost:7000/api/students/4    put or update
//http://localhost:7000/api/students       post
//http://localhost:7000/api/students/3     delete 