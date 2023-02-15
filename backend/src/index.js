const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const routes = require('./routes')
const cors = require('cors')
const { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app) //usando o WebSocket para lidar com comandos enviados pelo back-end.
//separando para tratar o WebSocket.

setupWebSocket(server)

mongoose.connect('mongodb+srv://JasonSantos:3y7sZQUL7VbeiBx@cluster0.7kqpwxg.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)