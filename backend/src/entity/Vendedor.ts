import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Grupo } from "./Grupo"

@Entity()
export class Vendedor {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    CPF_CNPJ: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    endereco: string

    @Column()
    ramo: string

    @OneToMany(() => Grupo, (grupo) => grupo.vendedor)
    grupos: Grupo[]
}