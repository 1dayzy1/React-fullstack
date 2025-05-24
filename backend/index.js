import express, { json } from 'express';
import mysql from 'mysql2';
import cors from 'cors'

const app = express();
app.use(cors())

const db  = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"Dayzy_21420",
    database:"test",


});


app.get("/", (req, res) => {
    res.json("Сервер работает");
});





app.get("/books", (req, res) => {

    const response = "SELECT * FROM test.books";

    db.query(response, (err, data) => {
        if(err){
            return res.json(err);
        }else{
            return res.json(data);
        }
    })
    
})



app.listen(8800, () => {
    console.log('Server started!');
    
} );



