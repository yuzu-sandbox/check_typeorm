import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100
  })
  body: string

  @ManyToOne(type => User, user => user.id)
  assign: User

  @Column({nullable: true})
  limit: Date

  @Column({default: false})
  done: boolean;
}
