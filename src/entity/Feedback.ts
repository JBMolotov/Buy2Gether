import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public description!: string;

    @Column()
    public score!: number;

    @Column()
    public offerId!: number;

    @Column()
    public clientId!: number;
}