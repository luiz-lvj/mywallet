import styled from 'styled-components';
import { ButtonForm, FormStyle, InputForm, WalletMainTitle } from './FormStyles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    function warningPasswordsMatching(possiblePassword){
        if(possiblePassword === ''){
            setIsPasswordMatch(true);
            return;
        }
        if(password !== possiblePassword){
            setIsPasswordMatch(false);
        }
        else{
            setIsPasswordMatch(true);
        }
    }
    
    function MessagePasswordsDiff(){
        return(
            <MessageDiff>As senhas digitadas devem ser iguais</MessageDiff>
        );
    }

    return(
        <RegisterPage>
            <WalletMainTitle/>
            <FormStyle>
                <InputForm
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}/>
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

                {isPasswordMatch ? '': <MessagePasswordsDiff/>}
                <InputForm
                    type="password"
                    placeholder="Confirme a Senha"
                    onChange={e =>{
                        warningPasswordsMatching(e.target.value)
                    }}/>
                <ButtonForm>Cadastrar</ButtonForm>
            </FormStyle>
            <Link to="/login">Já tem uma conta? Entre agora!</Link>
        </RegisterPage>
    );
}

const RegisterPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14vh;
    a{
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
    }
`;

const MessageDiff = styled.p`
    color: red;
    font-size: 12px;
    display: block;
    margin-bottom: 3px;
`;