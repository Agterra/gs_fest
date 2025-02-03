import { Sequelize } from "sequelize-typescript";
import Player from "./models/player";
import GameTable from "./models/table";
import Score from "./models/score";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    repositoryMode: true,
    models: [
        Player,
        GameTable,
        Score,
    ]
})

export const playerRepository = sequelize.getRepository(Player)
export const tableRepository = sequelize.getRepository(GameTable)
export const scoreRepository = sequelize.getRepository(Score)

