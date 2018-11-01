import "reflect-metadata"
import { createConnection } from "typeorm"
import { User } from "./entity/User"
import { Task } from "./entity/Task"

createConnection()
  .then(async connection => {
    // user作成
    const user = new User()
    user.name = "yuzu"
    const userRepo = connection.getRepository(User)
    await userRepo.save(user)

    // task作成
    const task = new Task()
    task.body = 'fuga'
    task.assign = user
    const taskRepo = connection.getRepository(Task)
    await taskRepo.save(task)

    const task2 = new Task()
    task2.body = 'hoge'
    task2.limit = new Date()
    await taskRepo.save(task2)

    const u = await connection.getRepository(User).findOne({name: 'yuzu'})
    console.log(`Select Name: ${JSON.stringify(u)}\n`)

    const t = await connection.getRepository(Task).findOne(1)
    console.log(`Task findOne: ${JSON.stringify(t)}\n`)

    const userTasks = await connection
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.tasks", "task")
      .getMany()
    console.log(`userTasks: ${JSON.stringify(userTasks)}\n`)

    const allTask = await connection.getRepository(Task).find()
    console.log(`allTasks: ${JSON.stringify(allTask)}\n`)

    connection.close()
  })
  .catch(error => console.log(error))
