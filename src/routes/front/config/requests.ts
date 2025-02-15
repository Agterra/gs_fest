import { Request, Response } from "express";

export const getConfigPage = (req: Request, res: Response) => {
    res.render('_config.pug')
}