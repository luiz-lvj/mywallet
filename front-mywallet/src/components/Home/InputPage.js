import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContex";
import { ButtonForm, FormStyle, InputForm } from "../Sign/FormStyles";

export default function InputPage({ inputType }){
    const history = useHistory();
    const {user, setUser} = useContext(UserContext)
    const titlePage = inputType === "entrance" ? "Entrada" : (inputType === "exit" ? "Saída" : null);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("");
    if(titlePage === null){
        history.push("/");
        return "";
    }

    function createEntranceOrExit(e){
        e.preventDefault();
        setLoading(true);
        const body = {
            value: value,
            description: description,
            type: inputType,
            date: new Date(Date.now()),
            userId: user.id
        }
        const url = "http://localhost:4000/balance"
        const requestPromise = axios.post(url, body);
        requestPromise.then(response => {
            alert("Entrada ou saída feita com sucesso!");
            setLoading(false);
            setValue(0);
            setDescription("");
            history.push("/home");
        });
        requestPromise.catch(err =>{
            alert("Infelizmente não conseguimos fazer sua transação!");
            setLoading(false);
            setValue(0);
            setDescription("");
            history.push("/home");
        })
    }
    return(
        <InputPageStyle>
        <h3>Nova {titlePage} (em centavos)</h3>
        <FormStyle onSubmit={e => createEntranceOrExit(e)}>
            <InputForm required
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor"/>
            
            <InputForm required
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"/>

            <ButtonForm required disabled={loading}>Salvar {titlePage}</ButtonForm>
        </FormStyle>
        </InputPageStyle>
    );
}

const InputPageStyle = styled.div`
    width: 89%;
    max-width: 368px;
    margin-bottom: 16px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    h3{
        font-size: 26px;
        color: #FFFFFF;
        font-weight: 700;
        display: inline-block;
        margin-bottom: 30px;
    }
`;