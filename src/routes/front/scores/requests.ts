import { Request, Response } from "express";

export const getScoresPage = (req: Request, res: Response) => {
    res.render('scores/_index.pug')
}