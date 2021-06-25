import express from 'express';
import cors from 'cors';
import connection from './connectDb';
import { userLoginSchema, userSchema } from './schemas';
import bcrypt from 'bcrypt';
import { isValidEmail, validEmail } from './utils';

const app = express();
const server_port = 4000;
app.use(cors());
app.use(express.json());

const routes = {
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
        const balance = parseInt(req.body.balance);
        const balanceStatus = req.body.balanceStatus;
        const password = req.body.password;
        if(password.includes(" ")){
            return res.sendStatus(400);
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        
        const newUser = await connection.query(`INSERT INTO users(
        name, email, balance, balanceStatus, password)
        VALUES ($1, $2, $3, $4, $5)
        `,[name, email, balance, balanceStatus, hashPassword] );
        return res.sendStatus(201);
    } catch(err){
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
        if(!user){
            return res.sendStatus(404);
        }
        if(bcrypt.compareSync(password, user.password)){
            const userLogged = {
                name: user.name,
                email: user.email,
                balance: user.balance,
                balanceStatus: user.balanceStatus
            }
            res.status(200)
            return res.send(userLogged);
        }
        return res.sendStatus(400);
    } catch{
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
        FROM iomey WHERE "userId"=$1`, [userId]);
        res.status(200);
        return res.send(iomoney);
    } catch{
        return res.sendStatus(500);
    }
});

app.post(routes.balance, async (req, res) => {
    try{

    } catch{
        return res.sendStatus(500);
    }
});

app.listen(server_port);