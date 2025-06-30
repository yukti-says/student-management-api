import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  class: String,
  age: Number,
  email: String,
  phone: String,
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Linked to the teacher
  },
});


export default mongoose.model('Student',studentSchema)