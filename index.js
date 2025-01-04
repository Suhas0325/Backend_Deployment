require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.json({ message: "Hello from the API" });
});

// API route
app.get('/get_API', (req, res) => {
    const apiKey = process.env.API_KEY;
    if(apiKey){
        res.json({apiKey});
    }
    else{
        res.status(500).json({error : "API key not found"});
    }
});

app.listen(port , ()=>{
    console.log("Server running")
}) // Export the app for serverless usage
