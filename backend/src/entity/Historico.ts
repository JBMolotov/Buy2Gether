import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Cliente } from "./Cliente"
import { Oferta } from "./Oferta"

@Entity()
export class Historico {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: string

    @Column()
    horario: string

    @OneToOne(() => Cliente)
    @JoinColumn()
    cliente: Cliente

    @OneToOne(() => Oferta)
    @JoinColumn()
    oferta: Oferta
}