import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @Index({ unique: true})
  public cpfCnpj!: string;

  @Column()
  public name!: string;

  @Column()
  public email!: string;

  @Column()
  public password!: string;

  @Column()
  public address!: string;

  @Column()
  public fieldOfActivity!: string;

  @Column({ default: false })
  public isApproved!: boolean;
}
