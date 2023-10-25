import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  Column,
  JoinTable,
  Index,
  BaseEntity,
} from "typeorm";
import { Offer } from "./Offer";

@Entity()
export class Client /*extends BaseEntity*/{
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @Index({ unique: true })
  public cpf!: string;

  @Column()
  public name!: string;

  @Column()
  public email!: string;

  @Column()
  public password!: string;

  @Column()
  public address!: string;

  @Column()
  public phoneNumber!: string;

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
