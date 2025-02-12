import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import Employee from '../models/EmpModel.js'

const Signup = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password, isAdmin } = req.body
    console.log("Received signup data:", { fullname, email, password, isAdmin })

    try {
        const emp = await Employee.findOne({ email: email })
        if (emp) return res.status(400).json({ message: "There exists a user with the same email" })

        const hashPassword = await bcryptjs.hash(password, 10)
        const newEmp = new Employee({
            fullname: fullname,
            email: email,
            password: hashPassword,
            isAdmin: isAdmin // Ensure this field is handled correctly
        })

        await newEmp.save()

        const token = jwt.sign({ id: newEmp._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.cookie('token', token)

        res.status(201).json({
            token: token,
            employee: newEmp
        })
    } catch (error) {
        console.error("Error during signup:", error)
        res.status(500).json({ message: 'Server error' })
    }
}

const Login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        const Emp = await Employee.findOne({ email: email })
        if (!Emp) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const isMatch = await bcryptjs.compare(password, Emp.password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ id: Emp._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.cookie('token', token)
        res.status(201).json({
            token: token,
            employee: Emp
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' })
    }
}



// taskTitle: { type: String,required:true},
// taskDescription: { type: String, required: true },

// taskDate: { type: Date, required: true },
// category: { type: String, required: true },
const assignTask = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name } = req.params
    const { taskTitle, taskDescription, taskDate, category } = req.body

    // Create new task instance ensuring all required fields match the taskSchema
    const newTask = { taskTitle, taskDescription, taskDate, category }

    try {
        const updatedEmployee = await Employee.findOneAndUpdate(
            { fullname: name },
            { $push: { tasks: newTask } },
            { new: true }
        )

        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" })
        }

        return res.status(200).json({
            message: "Task added successfully",
            employee: updatedEmployee
        })
    } catch (error) {
        console.error("Error while adding task:", error)
        return res.status(500).json({ message: "Server error" })
    }
}



const Logout = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ message: 'Logged out successfully' })
}

 const getprofile=async(req,res,next)=>{
    try {
     
     return res.status(200).json(req.employee);
    } catch (error) {
     console.error("There is an error while getting Profile ", error);
         return res.status(500).json({
             message: "Internal Server Error"
         });
    }
 }



const getAllemployees=async(req,res)=>{
    try {
        const filteredUsers=await Employee.find({ isAdmin: false }).select('-password')
    
    
       
        return res.status(200).json(
            filteredUsers
        )
        
    } catch (error) {
        console.error("There is an error while getting  all the employee,server error", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
        
    }
}
export { Login, Signup, Logout ,assignTask ,getprofile,getAllemployees};