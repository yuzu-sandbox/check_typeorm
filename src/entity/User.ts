import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { Task } from "./Task"

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 30 })
  name: string

  // nullableは明示的に指定しないといけない
  @Column({ nullable: true })
  job: string

  @OneToMany(type => Task, task => task.assign)
  tasks: Task[]
}
