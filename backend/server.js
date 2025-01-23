const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

app.get('/' , (req,res) => {
    return res.json({
        status: 1,
        response : "Server is UP",
    });
})

app.listen(PORT , () => {
    console.log("Server is running on port ", PORT);
})