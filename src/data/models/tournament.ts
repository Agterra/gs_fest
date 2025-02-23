import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Player from "./player";

@Entity()
export default class Tournament {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @OneToMany(() => Player, (player) => player.tournament)
    players!: Player[]
}