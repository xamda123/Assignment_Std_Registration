import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentId: {
     type: String, 
     unique: true
     },
  name: { 
    type: String,
     required: true 
    },
  email: { 
    type: String,
     required: true, 
     unique: true 
    },
  class: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "Class" 
    },
});

export default mongoose.model("Student", studentSchema);
