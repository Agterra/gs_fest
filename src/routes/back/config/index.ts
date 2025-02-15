import { Router } from "express";
import { createNewTournament } from "./requests";

export const configBackRouter = Router()

configBackRouter.post('/create_tournament', createNewTournament)