import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./real_state.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, unique: true, nullable: false })
  name: string;

  @OneToMany(() => RealEstate, (r) => r.category)
  realEstate: Array<RealEstate>;
}
