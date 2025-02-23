import Score from "./score";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Table } from "typeorm";
import GameTable from "./gametable";
import Tournament from "./tournament";

@Entity()
export default class Player {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @OneToMany(() => Score, (score) => score.player)
    scores!: Score[]

    @ManyToOne(() => Tournament, (tournament) => tournament.players)
    tournament!: Tournament

    @ManyToOne(() => GameTable, (table) => table.players)
    table!: Table
}