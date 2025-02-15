import bodyParser from 'body-parser'
import Express from 'express'
import { Database } from './data/database'
import { apiRouter } from './routes/back'
import { frontRouter } from './routes/front'

const app = Express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(Express.static(__dirname + '/assets'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.on('close', () => {
        console.log(res.statusCode, ':', req.originalUrl)
    })
    next()
})

app.use('/api', apiRouter)
app.use('/', frontRouter)

app.listen(3000, async () => {
    console.log("App running on port 3000")
    await Database.initialize()
        .then(() => {
            console.log("Database initialized")
        })
})