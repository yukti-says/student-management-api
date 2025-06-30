import Assignment from "../models/Assignment.js";

// get assignments for logged in students

export const getMyAssignment = async (req, res) => {
    try {
        const { id } = req.params //taking student id
        const assignments = await Assignment.find({ student: id });
        res.json(assignments);
    }
    catch (err) {
        res.status(400).json({
            error:err.message
        })
    }
}