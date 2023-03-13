import mysql from 'mysql';

const connection:any = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

export const userReg = function(){
    connection.connect((err:any) => {
        if(err) throw err;
        console.log('connected')
        const insert = "INSERT INTO users (username, password) VALUES ($username, $password)";
        connection.query(insert, (err) => {
            if(err) throw err;
            console.log('inserted')
        }
    });
}
