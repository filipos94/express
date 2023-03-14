"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReg = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
const userReg = function () {
    connection.connect((err) => {
        if (err)
            throw err;
        console.log('connected');
        const insert = "INSERT INTO users (username, password) VALUES ($username, $password)";
        connection.query(insert, (err) => {
            if (err)
                throw err;
            console.log('inserted');
        });
    });
};
exports.userReg = userReg;
