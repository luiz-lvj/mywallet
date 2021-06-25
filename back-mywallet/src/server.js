import express from 'express';
import cors from 'cors';

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

    } catch(err){
        return res.sendStatus(500);
    }
});

app.listen(server_port);