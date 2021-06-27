

import express from 'express';
import cors from 'cors';
import connection from './connectDb.js';
import { ioSchema, userLoginSchema, userSchema } from './schemas.js';
import bcrypt from 'bcrypt';
import { isDuplicatedEmail, isValidEmail, isValidId, validEmail } from './utils.js';

const app = express();
app.use(cors());
app.use(express.json());

export const routes = {
    login: "/login",
    register: "/register",
    balance: "/balance"
}

app.post(routes.register, async (req, res) => {
    try{
        if(userSchema.validate(req.body).error !== undefined){
            return res.sendStatus(400);
        }
        const name = req.body.name;
        if(!isValidEmail(req.body.email)){
            return res.sendStatus(400);
        }
        const email = validEmail(req.body.email);
        const password = req.body.password;
        if(password.includes(" ")){
            return res.sendStatus(400);
        }
        if(await isDuplicatedEmail(email)){
            return res.sendStatus(409);
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        
        const newUser = await connection.query(`INSERT INTO users(name, email, password) VALUES ($1, $2, $3)`,[name, email,hashPassword] );
        return res.sendStatus(201);
    } catch(err){
        console.log(err)
        return res.sendStatus(500);
    }
});

app.post(routes.login, async (req, res) => {
    try{
        if(userLoginSchema.validate(req.body).error !== undefined){
            return res.sendStatus(400);
        }
        const email = String(req.body.email).trim();
        const password = String(req.body.password).trim();
        
        const user = await connection.query(`SELECT * FROM users WHERE email=$1`, [email]);
        if(!user || user.rows.length <= 0){
            return res.sendStatus(404);
        }
        if(bcrypt.compareSync(password, user.rows[0].password)){
            const userLogged = {
                name: user.name,
                email: user.email,
            }
            res.status(200)
            return res.send(userLogged);
        }
        return res.sendStatus(400);
    } catch(err){
        console.log(err)
        return res.sendStatus(500);
    }
});

app.get(routes.balance, async (req, res) => {
    try{
        if(!req.body.userId){
            return res.sendStatus(400);
        }
        const userId = parseInt(req.body.userId.trim());
        if(typeof(userId) !== "number"){
            return res.sendStatus(400);
        }
        const iomoney = await connection.query(`SELECT
        value, description, type, date
        FROM iomoney WHERE "userId"=$1`, [userId]);
        res.status(200);
        return res.send(iomoney);
    } catch{
        return res.sendStatus(500);
    }
});

app.post(routes.balance, async (req, res) => {
    try{
        if(ioSchema.validate(req.body).error !== undefined){
            return res.sendStatus(400);
        }
        const value = parseInt(req.body.value);
        const description =  req.body.description;
        const type = req.body.type;
        const date = req.body.date;
        const userId = parseInt(req.body.userId);
        if(!(await isValidId('users', userId))){
            return res.sendStatus(404);
        }

        console.log(date);
        return res.sendStatus(200);
    } catch{
        return res.sendStatus(500);
    }
});

export default app;