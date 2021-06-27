import app, { routes } from "../src/app.js";
import supertest from 'supertest';
import connection from "../src/connectDb.js";


describe(`POST ${routes.login}`, () => {
    it("returns 200 for valid login", async() => {
        let body = {
            name: "teste",
            email: "teste@teste.com",
            password: "123"
        }
        const registerUser = await supertest(app).post(routes.register).send(body);
        expect(registerUser.status).toEqual(201);
        body = {
            email: "teste@teste.com",
            password: "123"
        }
        const loginUser = await supertest(app).post(routes.login).send(body);
        expect(loginUser.status).toEqual(200);
    });
    it("returns 404 for unknown login", async () =>{
        const body = {
            email: "unknown@unknown.com",
            password: "any"
        }
        const loginUser = await supertest(app).post(routes.login).send(body);
        expect(loginUser.status).toEqual(404);
    });
    it("returns 400 for wrong password", async () =>{
        let body = {
            name: "teste",
            email: "teste@teste.com",
            password: "123"
        }
        const registerUser = await supertest(app).post(routes.register).send(body);
        expect(registerUser.status).toEqual(201);
        body = {
            email: "teste@teste.com",
            password: "1234"
        }

        const loginUser = await supertest(app).post(routes.login).send(body);
        expect(loginUser.status).toEqual(400);
    });
    it("returns 400 for bad request", async () =>{
        let body = {
            name: "teste",
            email: "teste@teste.com",
            password: "123"
        }
        const registerUser = await supertest(app).post(routes.register).send(body);
        expect(registerUser.status).toEqual(201);
        body = {
            name: "teste"
        }
        const loginUser = await supertest(app).post(routes.login).send(body);
        expect(loginUser.status).toEqual(400);
    })
});
beforeEach(async () => {
    await connection.query('DELETE FROM users');
});

afterAll(() => {
    connection.end();
});

