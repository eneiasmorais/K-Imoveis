import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { RealEstate } from "./real_state.entity";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({ type: "date", nullable: false })
  date: string;

  @Column({ type: "time", nullable: false })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (r) => r.schedules)
  realEstate: RealEstate;
}
