import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Schedule } from "./schedules.entity";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    default: 0,
    nullable: false,
  })
  value: number | string;

  @Column({ type: "integer", nullable: false })
  size: number;

  @CreateDateColumn({ type: "date", nullable: false })
  createdAt: string | Date;

  @CreateDateColumn({ type: "date", nullable: false })
  updatedAt: string | Date;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Array<RealEstate>;

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}
