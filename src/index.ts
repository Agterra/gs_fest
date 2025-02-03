import bodyParser from 'body-parser'
import Express from 'express'
import { setupRouter } from './routes/setup'
import { sequelize } from './data/database'

const app = Express()
const database = sequelize

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(Express.static(__dirname + '/assets'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.on('close', () => {
        console.log(res.statusCode, ':', req.path)
    })
    next()
})

app.get('/', (req, res) => {
    res.render('index', { version: process.env.npm_package_version })
})

app.listen(3000, () => {
    console.log("App running on port 3000")
})