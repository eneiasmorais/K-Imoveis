import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./schedules.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 45, nullable: false, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ type: "varchar", length: 120, nullable: false })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date", nullable: true })
  updatedAt: string | null | undefined;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string | null | undefined;

  @OneToMany(() => Schedule, (s) => s.user)
  schedules: Array<Schedule>;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}
