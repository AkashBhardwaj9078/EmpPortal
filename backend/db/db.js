import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const db_connect = async () => {
    // const dbUri = process.env.DB_CON;
    // if (!dbUri) {
    //     console.error("DB connection string is missing in environment variables");
    //     return;
    // }
    
    
    await mongoose.connect(process.env.DB_CON).then(() => {
        console.log("DB is successfully connected");
    }).catch((error) => {
        console.log("DB fails to connect", error);
    });
};