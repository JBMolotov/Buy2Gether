import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Client } from "./Client";

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  public createdOn!: Date;

  @Column({ type: "timestamp", nullable: true })
  public updatedAt!: Date;

  @Column({ type: "timestamp", nullable: true })
  public deletedAt!: Date;

  @Column()
  public price!: number;

  @Column()
  public description!: string;

  @Column({ nullable: true })
  public minimalForFreeDelivery!: number;

  @Column({ nullable: true })
  public minimalForConsolidation!: number;

  @Column()
  public totalAmount!: number;

  @Column()
  public isPublic!: boolean;

  @Column({ type: "int", default: 1 })
  public version!: number;

  @ManyToMany(() => Client, (client) => client.offers)
  public clients!: Client[];

  @Column()
  public companyId!: number;
}
