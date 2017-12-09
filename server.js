const express = require('express')
const https = require('https')
const fs = require('fs')
const http = require('http')
const helmet = require('helmet')

const CONFIG = require('./app.config')

let app = new express()
let server = http.createServer(app)
let listen_callback = (server_name, port) =>
  console.log(`${server_name} listening on port: ${port}`)

// Production Server Code

app.enable('trust proxy')
app.use(helmet())
app.use(express.static(CONFIG.BUILD_PATH))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/', function (req, res) {
  if (!req.secure) {
    let base_host = req.headers.host.split(':')[0]
    res.redirect(`https://${base_host}${req.url}`)
  } else {
    res.sendFile(CONFIG.APP_INDEX)
  }
})

server.listen(
  CONFIG.PORT,
  listen_callback.bind(null, 'HTTP Server ', CONFIG.PORT)
)

if (CONFIG.USE_SSL) {
  let sslOptions = {
    key: fs.readFileSync('certs/denimlabs.co.key'),
    cert: fs.readFileSync('certs/59c9d1775a167495.crt'),

    ca: [
      fs.readFileSync('certs/gd_bundle-g2-g1_1.crt'),
      fs.readFileSync('certs/gd_bundle-g2-g1_2.crt'),
      fs.readFileSync('certs/gd_bundle-g2-g1_3.crt')
    ]
  }
  let secureServer = https.createServer(sslOptions, app)
  secureServer.listen(
    CONFIG.SECURE_PORT,
    listen_callback.bind(null, 'HTTPS Server', CONFIG.SECURE_PORT)
  )
}
