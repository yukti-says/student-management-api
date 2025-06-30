import Student from "../models/Student.js";

// adding student 
export const addStudent = async (req, res) => {
    try {
        const newStudent = await Student.create({
            ...req.body,
            createdBy:req.user.id 
        })
        res.status(201).json({
            message: "Student added successfully",
            student: newStudent
        });
    }
    catch (err) {
        res.status(400).json({
            error:err.message
        })
    }
}

// update user
export const updateStudent = async (req, res) => {
    try {
        // finding
        const updated = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
              error: "student not found",
            });
              
        }

        res.json({
            message: "Student updated",
            student : updated
        })
    }
    catch (err) {
        res.status(400).json({
            error:err.message
        })
    }
}

// get student by id
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ error: "Student not found" })
        
        res.json(student);
    }
    
    catch (err) {
      res.status(400).json({
        error: err.message,
      });
    }
}

// deleting user
export const deleteStudent = async (req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}