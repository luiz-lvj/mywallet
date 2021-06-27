import app, { routes } from "../src/app.js";
import supertest from 'supertest';
import connection from "../src/connectDb.js";

beforeEach(async () => {
    await connection.query('DELETE FROM users');
});

afterAll(() => {
    connection.end();
})

describe(`POST ${routes.login}`, async () => {
    it("returns 201 for valid params", () => {

    })
});