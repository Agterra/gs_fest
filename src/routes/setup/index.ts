import { Router } from "express";

export const setupRouter = Router()

setupRouter.get('/', (req, res) => {
    res.render('index')
})