import { app } from "../../../../app";
import { agent } from "supertest";
import { createConnection } from 'typeorm';
import { Connection } from "typeorm";

let connection: Connection

describe("Create User Controller", () => {
	beforeAll(async () => {
		connection = await createConnection()
    await connection.runMigrations()
	})

	afterAll(async () => {
		await connection.dropDatabase()
		await connection.close()
	})

	it("should be able create a new user", async () => {
		const response = await agent(app).post("/api/v1/users").send({
			name: "Louise",
			password: "789",
			email: "louise.silva1037@gmail.com",
		})

		expect(response.status).toBe(201)
	})
})
