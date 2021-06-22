import styled from 'styled-components';
import { ButtonForm, FormStyle, InputForm, WalletMainTitle } from './FormStyles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <LoginPage>
            <WalletMainTitle/>
            <FormStyle>
                <InputForm
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}/>

                <InputForm
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
                <ButtonForm>Entrar</ButtonForm>
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