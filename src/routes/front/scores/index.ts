import { Router } from "express";
import { getScoresPage } from "./requests";

export const scoresFrontRouter = Router()

scoresFrontRouter.get('/', getScoresPage)