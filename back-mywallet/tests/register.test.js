import app, { routes } from "../src/app.js";
import supertest from 'supertest';
import connection from "../src/connectDb.js";

describe(`POST ${routes.register}`, () =>{
    it("returns 201 for valid params", async ()=>{
        const body = {
            name: "teste",
            email: "teste@teste.com",
            password: "123"
        };
        const registerUser = await supertest(app).post(routes.register).send(body);
        expect(registerUser.status).toEqual(201);
    });

    it("returns 409 for duplicated email", async () =>{
        const body = {
            name: "teste",
            email: "teste@teste.com",
            password: "123"
        }
        const firstRegisterUser = await supertest(app).post(routes.register).send(body);
        expect(firstRegisterUser.status).toEqual(201);
        const secondRegisterUser = await supertest(app).post(routes.register).send(body);
        expect(secondRegisterUser.status).toEqual(409);
    });
    it("returns 400 for bad requests", async()=>{
        const body = {
            name: "teste",
            email: "teste @ teste.com",
            password: "123"
        }
        const registerUser = await supertest(app).post(routes.register).send(body);
        expect(registerUser.status).toEqual(400);
    });
});

beforeEach(async () => {
    await connection.query('DELETE FROM users');
});

afterAll(() => {
    connection.end();
})
