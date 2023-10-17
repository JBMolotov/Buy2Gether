import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Client } from "./Client";
import { Offer } from "./Offer";

@Entity()
export class Historic {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  public createdOn!: Date;

  @Column()
  public amount!: number;

  @OneToOne(() => Client)
  @JoinColumn()
  public client!: Client;

  @OneToOne(() => Offer)
  @JoinColumn()
  public offer!: Offer;
}
