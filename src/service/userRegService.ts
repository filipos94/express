import mysql from 'mysql';
const connection = mysql.createConnection({
    host: "localhost",
    port: 8000,
    user: "root",
    password: "",
    database: "test"
});

export const userReg = function(){
    connection.connect((err:any) => {
        if(err) {
            return(console.log('error'))
        }
        console.log('connected')
        const insert = "INSERT INTO users (username, password) VALUES ('test', '5')";
        connection.query(insert, (err:any) => {
            if(err) throw err;
            console.log('inserted')
        })
    });
}
