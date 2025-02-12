import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    active: { type: Boolean, default:true },
    completed: { type: Boolean, default:false},
    newTask: { type: Boolean, default: true },
    failed: { type: Boolean, default: false },

    
    
    taskTitle: { type: String,required:true},
    taskDescription: { type: String, required: true },
   
    taskDate: { type: Date, required: true },
    category: { type: String, required: true },
    
});

const employeeSchema = new mongoose.Schema({
    isAdmin: { type: Boolean, default: false },
    fullname: { type: String, required: true, minlength: 6 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    tasks: [taskSchema]
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
