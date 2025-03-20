const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig')
const {sendBasicEmail} = require('./services/email-service')

const setUpandStartServer = ()=>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.listen(PORT , ()=>{
        console.log(`Server started at port ${PORT}`);
    
    })
    sendBasicEmail(
        '<rs45> vedikaBopche2321@gmail.com',
        'vkbhamare26@gail.com',
        'Casual',
        'Hi, Vivek hope you are doing well and getting all the support you need'
    )
 

}

setUpandStartServer();