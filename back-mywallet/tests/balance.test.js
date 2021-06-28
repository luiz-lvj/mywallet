import app, { routes } from "../src/app.js";
import supertest from 'supertest';
import connection from "../src/connectDb.js";

describe(`GET ${routes.balance}`, ()=>{
    it("returns 404 if there is no userId", async ()=>{
        const balance = await supertest(app).get(routes.balance);
        expect(balance.status).toEqual(404);
    });
});
beforeEach(async () => {
    await connection.query('DELETE FROM iomoney');
});

afterAll(() => {
    connection.end();
});