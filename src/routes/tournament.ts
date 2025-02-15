import { Router } from "express";

export const tournamentRouter = Router()

tournamentRouter.get('/', (req, res) => {
    res.render('_tournament.pug')
})