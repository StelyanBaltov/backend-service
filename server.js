const express = require('express');
const app = express();
const db = require('./db_connect')

const port = process.env.PORT || 2003

app.get('/', (req, res) => {
    console.log(res.send('Hello World'))
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        const users = result.map((user) => {
            return user;
        })
        res.send(users);
    });

})

app.listen(port, () => console.log(`Server is listening on port ${port}`))