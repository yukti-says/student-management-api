import express from 'express'
import auth from '../middlewares/authMiddleware.js'
import role from '../middlewares/roleMiddleware.js'

import {
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById
} from '../controllers/teacherController.js'

const router = express.Router();

// protect routes
router.use(auth) 
// teacher only access
router.use(role('teacher'))

router.post('/add', addStudent)
router.put('/update/:id', updateStudent)
router.delete('/delete/:id', deleteStudent)
router.get('/student/:id', getStudentById)

export default router