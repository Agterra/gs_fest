import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Player from "./player";

@Table
export default class Score extends Model {
    @Column(DataType.NUMBER)
    round!: number

    @Column(DataType.NUMBER)
    rank!: number

    @Column(DataType.NUMBER)
    challenges!: number

    @ForeignKey(() => Player)
    @Column(DataType.NUMBER)
    playerId!: number

    @BelongsTo(() => Player)
    player!: Player
}