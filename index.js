const express = require('express')
const request = require('request')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
    },
}
app.options('*', cors(corsOptions))

const url = 'https://api.fireblocks.io'

app.use('/', cors(corsOptions), (req, res) => {
    const request_url = `${url}${req.url}`

    req.pipe(request(request_url)).pipe(res)
});

app.listen(5000, () => {
    console.log('Proxy server is listening on port 5000')
})

module.exports = app;