import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Player from "./player";

@Entity()
export default class Score {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    round!: number

    @Column()
    rank!: number

    @Column()
    challenges!: number

    @ManyToOne(() => Player, (player) => player.scores)
    player!: Player
}