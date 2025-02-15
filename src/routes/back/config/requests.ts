import { Request, Response } from "express"

export const createNewTournament = (req: Request, res: Response) => {
    console.log(req.body)
    res.send("ok")
}