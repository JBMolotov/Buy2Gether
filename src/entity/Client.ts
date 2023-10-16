import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from "typeorm";
import { ClientOfferPermission } from "./ClientOfferPermission";

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

  @ManyToMany(
    () => ClientOfferPermission,
    (clientOfferPermission) => clientOfferPermission.clients
  )
  public clientOfferPermissions!: ClientOfferPermission[];
}
