import styled from "styled-components";
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useHistory } from "react-router-dom";

export default function InputMoney(){
    const history = useHistory();
    return(
        <InputsContainer>
            <SingleInput onClick={() => history.push("/entrance")}>
                < IoAddCircleOutline size="24px" color="#FFFFFF"/>
                <h3>Nova <br/>entrada</h3>
            </SingleInput>

            <SingleInput onClick={() => history.push("/exit")}>
            < IoRemoveCircleOutline size="24px" color="#FFFFFF"/>
            <h3>Nova <br/>saída</h3>
            </SingleInput>
        </InputsContainer>
    );
}

const InputsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 114px;
`;

const SingleInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 47.6%;
    background: #A328D6;
    border-radius: 5px;
    padding: 10px;
    h3{
        color: #FFFFFF;
        font-weight: 700;
        font-style: normal;
        font-size: 17px;
        line-height: 20px;
    }
`;