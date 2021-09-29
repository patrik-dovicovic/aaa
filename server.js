const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.listen(80);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'home.html'));
});