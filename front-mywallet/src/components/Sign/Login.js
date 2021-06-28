import styled from 'styled-components';
import { ButtonForm, FormStyle, InputForm, WalletMainTitle } from './FormStyles';
import { Link, useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContex';

export default function Login(){
    const {user, setUser} = useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function sigIn(e){
        e.preventDefault();
        setLoading(true);
        const body = {
            email: email,
            password: password
        }
        const url = "http://localhost:4000/login"
        const sigInPromise = axios.post(url, body);
        setEmail("");
        setPassword("");
        sigInPromise.then(response => {
            setUser(response.data);
            history.push("/home")
            setLoading(false);
        });
        sigInPromise.catch(err =>{
            alert("Não foi possível logar, tente novamente!");
            setLoading(false);
        })
    }
    return(
        <LoginPage>
            <WalletMainTitle/>
            <FormStyle onSubmit={e => sigIn(e)}>
                <InputForm required
                type="email" 
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}/>

                <InputForm required
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
                <ButtonForm required disabled={loading}>Entrar</ButtonForm>
            </FormStyle>
            <Link to="/register">Primeira vez? Cadastre-se!</Link>
        </LoginPage>
    );
}

const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24vh;
    a{
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
    }
`;