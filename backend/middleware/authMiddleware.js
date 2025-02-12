import Employee from '../models/EmpModel.js';
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const employee = await Employee.findById(decoded.id);
        if (!employee) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.employee = employee;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export { auth };
