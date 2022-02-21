const express = require('express')
const port = process.env.port || 8080

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})


app.listen(port, () => {
    console.log('Listening on port: ' + port)
})