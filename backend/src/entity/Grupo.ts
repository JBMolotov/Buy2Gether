import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Vendedor } from "./Vendedor"
import { Oferta } from "./Oferta"

@Entity()
export class Grupo {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @ManyToOne(() => Vendedor, (vendedor) => vendedor.grupos)
    vendedor: Vendedor

    @OneToMany(() => Oferta, (oferta) => oferta.grupo)
    ofertas: Oferta[]
}