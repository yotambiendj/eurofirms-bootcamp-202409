import express from 'express'
import cors from 'cors'

import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import getPosts from './logic/getPosts.js'
import createPost from './logic/createPost.js'
import deletePost from './logic/deletePost.js'

const api = express()

api.use(cors())

api.get('/', (req, res) => res.send('Hello, World!'))

const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const username = req.body.username
        const password = req.body.password

        registerUser(name, email, username, password)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const userId = authenticateUser(username, password)

        res.json(userId)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.get('/users/:targetUserId/name', (req, res) => {
    try {
        const authorization = req.headers.authorization // Basic <user-id>
        const userId = authorization.slice(6)

        const targetUserId = req.params.targetUserId

        const name = getUserName(userId, targetUserId)

        res.json(name)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.get('/posts', (req, res) => {
    try {
        const authorization = req.headers.authorization // Basic <user-id>
        const userId = authorization.slice(6)

        const posts = getPosts(userId)

        res.json(posts)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.post('/posts', jsonBodyParser, (req, res) => {
    try {
        const authorization = req.headers.authorization // Basic <user-id>
        const userId = authorization.slice(6)

        const image = req.body.image
        const text = req.body.text

        createPost(userId, image, text)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.delete('/posts/:postId', (req, res) => {
    try {
        const authorization = req.headers.authorization // Basic <user-id>
        const userId = authorization.slice(6)

        const postId = req.params.postId

        deletePost(userId, postId)

        res.status(204).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.listen(8080, () => console.log('API is up'))