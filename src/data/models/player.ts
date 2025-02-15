import Score from "./score";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Table } from "typeorm";
import GameTable from "./gametable";

@Entity()
export default class Player {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @OneToMany(() => Score, (score) => score.player)
    scores!: Score[]

    @ManyToOne(() => GameTable, (table) => table.players)
    table!: Table
}