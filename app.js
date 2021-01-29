const express = require('express');
const path = require('path');
const PORT = process.env.PORT || '3010';
const app = express();


const publicPath = path.resolve(__dirname + '/public')
app.use('/public', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/ingresa', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.listen(PORT, () => console.log(`
    Servidor corriendo en: 
    http://localhost:${PORT}`
));