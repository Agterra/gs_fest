import { Router } from "express";
import { createNewTournament } from "./requests";

export const tournamentBackRouter = Router()

tournamentBackRouter.post('/create', createNewTournament)