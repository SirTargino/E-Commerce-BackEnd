import express from "express";
import { connectToDatabase } from "./database/connection";

const port = process.env.port;

const app = express();

app.listen(port, async () => {
    connectToDatabase();
    console.log(`Server run on port ${port}`)
});