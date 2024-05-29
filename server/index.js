const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('API running joss')
})

app.listen('1999', () => {
    console.log('Server running on port 1999')
})