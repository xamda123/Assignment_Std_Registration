import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Student"
   },
  subject: String,
  score: Number
});

export default mongoose.model("Grade", gradeSchema);
