import { Router } from "express";
import { tournamentBackRouter } from "./tournament";

export const apiRouter = Router()

apiRouter.use('/tournament', tournamentBackRouter)