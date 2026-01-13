import connection from "../database/db.js";

export const getAllUserModel = (callback) => {
  const query = "SELECT * FROM students";
  connection.query(query, (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

export const getUserByIdModel = (id, callback) => {
  const query = "SELECT * FROM students WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

export const createStudentModel = (data, callback) => {
  const query =
    "INSERT INTO students(name, email, password, age) VALUES (?, ?, ?, ?)";
  connection.query(
    query,
    [data.name, data.email, data.password, data.age],
    (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    }
  );
};

export const updateStudents = (id, data, callback) => {
  const query =
    "UPDATE students SET name = ?, email = ?, password = ?, age = ? WHERE id = ?";
  connection.query(
    query,
    [data.name, data.email, data.password, data.age, id],
    (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    }
  );
};

export const deleteStudents = (id, callback) => {
  const query = "DELETE FROM students WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};
