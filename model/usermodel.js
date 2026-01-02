import connection from '../database/db.js';

export const getAllUserModel=(callback)=>{
  const query= "select * from students";
  connection.query(query,(err,result)=>{
    if (err){
      callback(err,null);
    }
    callback(null,result);
  });

};

export const getUserByIdModel=(userById,callback)=>{
  const query="select * from students where id = ?";
  connection.query(query,[userById],(err,result)=>{
    if(err){
      callback(err,null);
    }
    callback(null,result);
  });
};

export const createStudentModel=(data,callback)=>{
  const query="INSERT INTO students(name,email,password,age) values(?,?,?,?)";
  connection.query(query,[data.name, data.email ,data.password, data.age],(err,result)=>{
    if(err){
     return callback(err,null);
    }
    callback(null,result);
  });
};

export const updateStudents = (userById, data, callback) => { // userById ayaa horreeya hadda
  const query = "UPDATE students SET name = ?, email = ?, password = ?, age = ? WHERE id = ?";
  connection.query(
    query, 
    [data.name, data.email, data.password, data.age, userById], 
    (err, result) => {
      if (err) {
        console.log("MySQL Error:", err.message); 
        return callback(err, null);
      }
      callback(null, result);
    }
  );
};
export const deleteStudents=(userById,callback)=>{
  const query="DELETE from students where id=?";
  connection.query(query,[userById], (err,result)=>{
    if(err){
     return callback(err,null);
    }
    callback(null,result)
  });
};