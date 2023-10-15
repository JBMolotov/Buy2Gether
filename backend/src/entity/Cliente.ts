import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    CPF: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    endereco: string

    @Column()
    celular: number
}