import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
import { db_connect } from './db/db.js';
import express from 'express';
import cors from 'cors';


dotenv.config();



// Add CORS middleware with correct origin
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Custom middleware to enforce correct CORS headers


const server = http.createServer(app);
const port = process.env.PORT || 3000;

db_connect();

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});