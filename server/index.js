const express = require('express');
const db = require('./dbserver')
const cors = require('cors')

const app = express();
const PORT = 4141;
app.use(cors());
app.use(express.json())


app.get('/api/getItems', (req, res) => {
    db.query('SELECT * from sell_stuff.items', (err, res) => {
        if (err) {
            console.log(err)
        }
        // res.send(res)
        console.log('index.js pull')
        console.log(res)
    })
    


})


app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})