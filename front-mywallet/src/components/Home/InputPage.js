import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ButtonForm, FormStyle, InputForm } from "../Sign/FormStyles";

export default function InputPage({ inputType }){
    const history = useHistory();
    const titlePage = inputType === "entrance" ? "Entrada" : (inputType === "exit" ? "Saída" : null);
    if(titlePage === null){
        history.push("/");
        return "";
    }
    return(
        <InputPageStyle>
        <h3>Nova {titlePage}</h3>
        <FormStyle>
            <InputForm
            placeholder="Valor"/>
            
            <InputForm
            placeholder="Descrição"/>

            <ButtonForm>Salvar {titlePage}</ButtonForm>
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