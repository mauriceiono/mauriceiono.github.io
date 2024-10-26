const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files like HTML, CSS, and JavaScript from the current directory
app.use(express.static(__dirname));

// Serve the contact form HTML file at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Endpoint to handle form submission
app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure Outlook transporter
    let transporter = nodemailer.createTransport({
        service: 'Outlook365', 
        auth: {
            user: 'mthooks@email.sc.edu',
            pass: 'Journey09067' 
        }
    });

    const mailOptions = {
        from: 'mthooks@email.sc.edu',
        to: 'mthooks@email.sc.edu',
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        // Attempt to send the email
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully! Message ID:", info.messageId);  
        res.json({ status: 'success', message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Error sending email:", error);  
        res.json({ status: 'error', message: 'Email could not be sent.' });
    }a
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
