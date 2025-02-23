import { Request, Response } from "express"
import { Create } from "./types"
import { playerRepository, tournamentRepository } from "../../../data/database"
import Tournament from "../../../data/models/tournament"
import Player from "../../../data/models/player"

export const createNewTournament = async (req: Request, res: Response) => {
    const body: Create = req.body
    const newPlayers = body.players.map((username) => {
        const newPlayer = new Player()
        newPlayer.username = username
        return newPlayer
    })
    await playerRepository.save(newPlayers)
    const newtournament = new Tournament()
    newtournament.name = body.name
    newtournament.players = newPlayers
    await tournamentRepository.save(newtournament)

    const asd = await tournamentRepository.find()
    console.log(asd)
    res.send("ok")
}