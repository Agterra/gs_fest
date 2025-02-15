import { Router } from "express";

export const configRouter = Router()

configRouter.get('/', (req, res) => {
    res.render('_config.pug')
})