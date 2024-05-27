import express from "express";
import AppDataSource from "./data-source";

const port:number = Number(process.env.PORT);

const app = express();

app.listen(port, () => {
    AppDataSource.initialize().then(async () => {
        console.log(`Server running on http://localhost:${port}`);
    }).catch(error => console.log(error))
});