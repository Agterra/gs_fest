import { Router } from "express";

export const scoresRouter = Router()

scoresRouter.get('/', (req, res) => {
    res.render('_scores.pug')
})