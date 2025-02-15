import Player from "./player";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class GameTable {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    tableNumber!: number

    @OneToMany(() => Player, (player) => player.table)
    players!: Player[]
}