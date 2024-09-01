const express = require('express')
const app = express()
app.use((req, res, nxt) => {
    console.log('middel');
    nxt();
})
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/abc', function (req, res) {
    res.send('abc World')
})

app.listen(3000)
