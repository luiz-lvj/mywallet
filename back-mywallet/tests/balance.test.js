import app, { routes } from "../src/app.js";
import supertest from 'supertest';
import connection from "../src/connectDb.js";

describe(`GET ${routes.balance}`, ()=>{
    it("returns 404 if there is no userId", async () =>{
        const body = {
            userId: 100
        }
        const balance = await supertest(app).get(routes.balance).send(body);
        expect(balance.status).toEqual(404);
    });

    it("returns 400 if request is bad", async ()=>{
        const body ={
            notuserId: 1
        }
        const balance = await supertest(app).get(routes.balance).send(body);
        expect(balance.status).toEqual(400);
    });
});
beforeEach(async () => {
    await connection.query('DELETE FROM iomoney');
});

afterAll(() => {
    connection.end();
});