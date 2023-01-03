const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/views/calculator.html')
})


const port = process.argv[2] || 9999;
app.listen( port, () => {
    console.log(`Server running`);
    console.log(`You can access in localhost:${port} in your browser`);
})