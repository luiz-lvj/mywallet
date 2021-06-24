import styled from "styled-components";
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

export default function InputMoney(){
    return(
        <InputsContainer>
            <SingleInput>
                < IoAddCircleOutline size="24px" color="#FFFFFF"/>
                <h3>Nova <br/>entrada</h3>
            </SingleInput>

            <SingleInput>
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