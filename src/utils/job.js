const cron = require('node-cron')
const emailService = require('../services/email-service')
const sender = require('../config/email-config')

const setUpJob = () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to: email.recipientEmail,
                subject: email.subject,
                content: email.content
            },
            async (err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    await emailService.updateTicket(email.id, {status :"Success"});
                }
            }
        )

        }
        );

        console.log(response);
    })
}

module.exports = setUpJob;