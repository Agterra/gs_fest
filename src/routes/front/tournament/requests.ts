import { Request, Response } from "express"

export const getTournamentPage = (req: Request, res: Response) => {
    res.render('_tournament.pug')
}