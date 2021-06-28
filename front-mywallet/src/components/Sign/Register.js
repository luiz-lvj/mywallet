import styled from 'styled-components';
import { ButtonForm, FormStyle, InputForm, WalletMainTitle } from './FormStyles';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPass, setSecondPass] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

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
    
    function registerUser(e){
        e.preventDefault();
        setLoading(true);
        const body = {
            name: name,
            email: email,
            password: password
        }

        const url = "http://localhost:4000/register"
        const registerPromise = axios.post(url, body);
        setName("");
        setEmail("");
        setPassword("");
        setSecondPass("");
        registerPromise.then(response => {
            if(response.status === 201){
                alert('Usuário cadastrado com sucesso!');
            } else if(response.status === 409){
                alert('Email já cadastrado')
            } else{
                alert('Não foi possível te cadastrar. Tente novamente')
            }
            history.push("/");
            setLoading(false);
        });
        registerPromise.catch(err =>{
            alert('Infelizmente não conseguimos te cadastrar. Tente novamente')
            setLoading(false);
        })
    }

    return(
        <RegisterPage>
            <WalletMainTitle/>
            <FormStyle onSubmit={e => registerUser(e)}>
                <InputForm required
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}/>
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

                {isPasswordMatch ? '': <MessagePasswordsDiff/>}
                <InputForm required
                    type="password"
                    placeholder="Confirme a Senha"
                    value={secondPass}
                    onChange={e =>{
                        setSecondPass(e.target.value);
                        warningPasswordsMatching(e.target.value);
                    }}/>
                <ButtonForm required disabled={loading}>Cadastrar</ButtonForm>
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