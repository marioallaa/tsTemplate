
import { Entity, Column, PrimaryGeneratedColumn, Generated, Timestamp } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  uuid: string

  @Column({nullable: true })
  firstName: string;

  @Column({nullable: true })
  lastName: string;

  @Column({ unique: true, nullable: false })
  username: string

  @Column({ unique: true, nullable: false })
  email: string

  @Column({nullable: false })
  password: string

  @Column({nullable: true })
  industry: string

  @Column({nullable: true })
  phone: string

  @Column({nullable: true })
  empty: string

  @Column({ default: true })
  isActive: boolean;


  @Column('timestamp')
  createdAt: Timestamp;

  @Column('timestamp')
  updatedAt: Timestamp;

  @Column('timestamp')
  deletedAt: Timestamp;

}
