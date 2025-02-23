import Player from "./models/player";
import GameTable from "./models/gametable";
import Score from "./models/score";
import { DataSource } from "typeorm";
import Tournament from "./models/tournament";

export const Database = new DataSource({
    database: 'commanderfest.sqlite',
    type: 'sqlite',
    entities: [
        Player,
        GameTable,
        Score,
        Tournament,
    ]
})

export const playerRepository = Database.getRepository(Player)
export const tableRepository = Database.getRepository(GameTable)
export const scoreRepository = Database.getRepository(Score)
export const tournamentRepository = Database.getRepository(Tournament)
