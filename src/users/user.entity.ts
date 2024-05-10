import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
  BeforeRemove,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Report } from '../reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log(`Inserted User with id ${this.id}, email ${this.email}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated User with id ${this.id}, email ${this.email}`);
  }

  @BeforeRemove()
  logBeforeRemove() {
    console.log(`Removing User with id ${this.id}, email ${this.email}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Removed User successfully`);
  }
}
