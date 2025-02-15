import bodyParser from 'body-parser'
import Express from 'express'
import { configRouter } from './routes/config'
import { sequelize } from './data/database'
import { tournamentRouter } from './routes/tournament'
import { scoresRouter } from './routes/scores'

const app = Express()
const _ = sequelize

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

app.use('/config', configRouter)
app.use('/tournament', tournamentRouter)
app.use('/scores', scoresRouter)

app.get('/', (req, res) => {
    res.render('index', { version: process.env.npm_package_version })
})

app.listen(3000, () => {
    console.log("App running on port 3000")
})