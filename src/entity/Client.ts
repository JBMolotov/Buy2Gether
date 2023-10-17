import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  Column,
  JoinTable,
} from "typeorm";
import { Offer } from "./Offer";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public cpf!: number;

  @Column()
  public name!: string;

  @Column()
  public email!: string;

  @Column()
  public password!: string;

  @Column()
  public address!: string;

  @Column()
  public phoneNumber!: number;

  @ManyToMany(() => Offer, (offer) => offer.clients)
  @JoinTable({
    name: "client_offer_permission",
    joinColumn: {
      name: "client_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "offer_id",
      referencedColumnName: "id",
    },
  })
  public offers!: Offer[];
}
