import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { Client } from "./Client";
import { Offer } from "./Offer";

@Entity()
export class ClientOfferPermission {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToMany(() => Client)
  @JoinTable()
  public clients!: Client[];

  @OneToOne(() => Offer)
  @JoinColumn()
  public offer!: Offer;
}
