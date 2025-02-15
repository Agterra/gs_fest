import { Router } from "express";
import { configBackRouter } from "./config";

export const apiRouter = Router()

apiRouter.use('/config', configBackRouter)