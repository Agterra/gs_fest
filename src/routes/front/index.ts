import { Router } from "express";
import { configFrontRouter } from "./config";
import { tournamentFrontRouter } from "./tournament";
import { scoresFrontRouter } from "./scores";

export const frontRouter = Router()

frontRouter.get('/', (req, res) => {
    res.render('index', { version: process.env.npm_package_version })
})

frontRouter.use('/config', configFrontRouter)
frontRouter.use('/tournament', tournamentFrontRouter)
frontRouter.use('/scores', scoresFrontRouter)