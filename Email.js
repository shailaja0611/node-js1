const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'Ashwinishailajathanuja@gmail.com', 
        pass: 'Rakeshailu0611'     
    }
});


let mailOptions = {
    from: '"Sender Name" <your-email@gmail.com>', 
    to: 'recipient@example.com',                  
    subject: 'Hello from Node.js',                
    text: 'This is a test email sent from Node.js!', 
    html: '<b>This is a test email sent from Node.js!</b>' 
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Message sent: %s', info.messageId);
});
