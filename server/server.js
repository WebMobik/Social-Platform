import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import { MongoClient } from 'mongodb'
import template from '../template'

const app = express()
devBundle.compile(app)

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server started on port %s.', port)
})

const url = process.env.MONGODB_URI || 'mongodb+srv://mobik:123qwe@cluster0.y5ijq.mongodb.net/social?retryWrites=true&w=majority'
MongoClient.connect(url, (err, db) => {
    console.log('Connected successfully to mongodb server')
    db.close()
})
