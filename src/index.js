const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig')
const {sendBasicEmail} = require('./services/email-service')
const job = require('./utils/job')
const TicketController = require('./controller/ticket-controller')


const setUpandStartServer = ()=>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.post('/api/v1/tickets' , TicketController.create)
    app.listen(PORT , ()=>{
        console.log(`Server started at port ${PORT}`);
    
    })
    job();
    // sendBasicEmail(
    //     '<rs45> vedikaBopche2321@gmail.com',
    //     'vkbhamare26@gail.com',
    //     'Casual',
    //     'Hi, Vivek hope you are doing well and getting all the support you need'
    // )
 

}

setUpandStartServer();