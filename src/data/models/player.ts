import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import GameTable from "./table";
import Score from "./score";

@Table
export default class Player extends Model {
    @Column(DataType.STRING)
    username!: string

    @HasMany(() => Score)
    scores!: Score[]

    @ForeignKey(() => GameTable)
    @Column(DataType.NUMBER)
    tableId!: number

    @BelongsTo(() => GameTable)
    table!: GameTable
}