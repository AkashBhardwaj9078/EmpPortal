import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { EmpRouter } from './routes/EmpRoutes.js'

const app = express()

// Replace the unconfigured cors middleware with properly configured CORS.
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/emp", EmpRouter)

export default app
