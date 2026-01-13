import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Student", 
    required: true
   },
  subject: { 
    type: String, 
    required: true 
  },
  score: {
     type: Number, 
     required: true 
    },
});

export default mongoose.model("Grade", gradeSchema);
