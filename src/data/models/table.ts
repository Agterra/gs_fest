import { DataTypes } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Player from "./player";

@Table
export default class GameTable extends Model {
    @Column(DataTypes.NUMBER)
    tableNumber!: number

    @HasMany(() => Player)
    players!: Player[]
}