import "reflect-metadata"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository"
import { IUsersRepository } from "../../repositories/IUsersRepository"

let createUserUseCase: CreateUserUseCase
let usersRepository: IUsersRepository

describe("Create user User Case", () => {
  beforeAll(() => {
    usersRepository = new InMemoryUsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
  })

  it("whatever", async () => {
    const user = {
      name: "Test",
      email: "Tes@gmail.com",
      password: "testeteste"
    }

    await createUserUseCase.execute(user)
    const userSaved = await usersRepository.findByEmail(user.email)

    expect(user.name).toBe(userSaved?.name)
    expect(user.email).toBe(userSaved?.email)

  })

})
