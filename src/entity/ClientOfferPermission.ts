import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Client } from "./Client";
import { Offer } from "./Offer";

@Entity()
export class ClientOfferPermission {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToMany(() => Client, (client) => client.clientOfferPermissions)
  @JoinTable()
  public clients!: Client[];

  @ManyToMany(() => Offer, (offer) => offer.clientOfferPermission)
  public offers!: Offer[];
}
