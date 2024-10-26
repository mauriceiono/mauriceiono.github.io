const express = require('express');
const bodyParser = require('body-parser');
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

    // Prepare the data to send to Web3Forms
    const json = JSON.stringify({
        name,
        email,
        message,
        access_key: '1a115c8c-ffcc-41cf-973b-be26c8c56204' // Replace with your actual access key
    });

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        // Check if the response is successful
        if (response.ok) {
            console.log("Email sent successfully!");
            res.json({ status: 'success', message: 'Email sent successfully!' });
        } else {
            console.error("Error sending email:", response.statusText);
            res.json({ status: 'error', message: 'Email could not be sent.' });
        }
    } catch (error) {
        console.error("Error sending email:", error);
        res.json({ status: 'error', message: 'Email could not be sent.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
