import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Grupo } from "./Grupo"

@Entity()
export class Oferta {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    preco: number

    @Column()
    descricao: string

    @Column()
    quantidade_minima: number

    @ManyToOne(() => Grupo, (grupo) => grupo.ofertas)
    grupo: Grupo
}