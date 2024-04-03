const user = require('../models/user')

// Github pagelink frontend
const url = 'https://gincalicdan.github.io/BVC_Registration_frontend'

// User registration process from frontend
const registerUser = (req, res) => { 

    // Get data and store it to user model
    //console.log(req.body);
    user.id = req.body.id;
    user.fullName = req.body.fullName;
    user.address = req.body.address;
    user.status = req.body.status;

    // Calculate corresponding fees
    if (user.status == 'student') {
        user.fee = 10;
    } else if (user.status == 'staff') {
        user.fee = 50;
    } else {
        user.fee = 0;
    }
    console.log('Data received by the server: ')
    console.log(user);
    let myurl = url
    console.log('Received data from: ', myurl)
    res.redirect(myurl);
}


module.exports = {
    registerUser
}