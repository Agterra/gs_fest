import { Router } from "express";
import { getConfigPage } from "./requests";

export const configFrontRouter = Router()

configFrontRouter.get('/', getConfigPage)
