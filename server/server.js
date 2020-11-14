import config from '../config/config'
import mongoose from 'mongoose'
import app from './express'

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on('error', () => {
    console.log(config.mongoUri)
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})