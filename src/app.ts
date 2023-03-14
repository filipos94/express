import express from 'express';
const app = express();
import {userReg} from "./service/userRegService";

app.get("/", (req, res) => {
    res.send('<h1>Hello</h1>');
    userReg();
})

app.listen(5000);