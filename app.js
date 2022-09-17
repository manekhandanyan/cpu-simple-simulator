const express = require('express')
const FakeCpu = require('./cpu')
const a = new FakeCpu();
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})