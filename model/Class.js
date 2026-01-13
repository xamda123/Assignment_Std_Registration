import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  className: { 
    type: String,
     required: true
     },
  level: { 
    type: String 
  }, 
});

export default mongoose.model("Class", classSchema);
