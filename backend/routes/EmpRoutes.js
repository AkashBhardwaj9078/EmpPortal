import { Router } from "express"
import { body } from "express-validator"
// import { Login, Signup } from "../controllers/EmpController.js" // Corrected path
import { assignTask, getAllemployees, getprofile, Login, Logout } from '../contollers/EmpContoller.js'
import { Signup } from '../contollers/EmpContoller.js'
import { auth } from "../middleware/authMiddleware.js"
export const EmpRouter = Router()

EmpRouter.post("/signup",
    [
        body("email").isEmail().withMessage("Please provide a valid email."),
        body("fullname").isLength({ min: 6 }).withMessage("Fullname must be at least 6 characters long."),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
    ],
   Signup
)

EmpRouter.post("/login",
    [
        body("email").isEmail().withMessage("Please provide a valid email."),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
    ],
    Login
)

EmpRouter.put("/assign/:name", assignTask)

EmpRouter.get("/logout", auth, Logout)

EmpRouter.get("/profile",auth,getprofile)

EmpRouter.get("/all-profile",auth,getAllemployees);
