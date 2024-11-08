const express = require ('express')

const server = express()

server.get('/', (req,res) => res.send('server is up'))

server.get('/helloworld', (req, res) => res.send('Hello, World') )

server.listen(8080, () => console.log('server up'))