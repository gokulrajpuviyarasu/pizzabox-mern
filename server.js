const express = require("express");
const db = require("./db.js")

const Pizza = require('./models/pizzaModel')


const app = express();



app.use(express.json());
const path = require('path');
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })
}

   



const port = process.env.PORT || 4000;

app.listen(port, () => 'Server running on port port 🔥')






