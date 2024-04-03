const express = require('express')
const app = express()
const registerRoutes = require('./routes/registerRoute')

//  headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))

// middleware to convert json to js object
app.use(express.json())

// route handler for root URL
app.get('/', (req, res) => {
    res.redirect('https://gincalicdan.github.io/BVC_Registration_frontend');
});

// routes for register user
app.use(registerRoutes)

// start server
app.listen(3000, ()=>{
    console.log('Server is running........')
})