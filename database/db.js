import  mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection= mysql2.createPool({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE

})
 
connection.getConnection((err,conn)=>{
  if(err){
    console.log("init connection error ",err.message);
    return;
  }
  console.log("Database- successfluy connected!");
  
  
  connection.releaseConnection(conn);

});

export default connection;