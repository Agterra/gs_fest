import { Router } from "express";
import { getTournamentPage } from "./requests";

export const tournamentFrontRouter = Router()

tournamentFrontRouter.get('/', getTournamentPage)