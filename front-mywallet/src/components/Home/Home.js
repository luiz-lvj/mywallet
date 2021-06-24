import { useContext } from "react";
import styled from "styled-components"
import UserContext from "../contexts/UserContex";
import { IoEnterOutline } from "react-icons/io5";
import InputMoney from "./InputMoney";

export default function Home(){
    const {user} = useContext(UserContext);
    console.log(user);
    return(
        <Homepage>
            <HeaderHome>
                <h2>Olá, {user.name}</h2>
                <IoEnterOutline
                    color="#FFFFFF"
                    size="26px"/>
            </HeaderHome>
            <MoneyContainer empty={true}>
                <h3>Não há registros de entrada ou saída</h3>
            </MoneyContainer>
            <InputMoney/>
        </Homepage>
    );
}

const Homepage = styled.div`
    width: 89%;
    max-width: 368px;
    margin-bottom: 16px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`;

const HeaderHome = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    h2{
        font-size: 26px;
        color: #FFFFFF;
        font-weight: 700;
    }
`;

const MoneyContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.empty ? 'center': 'space-between'};
    ${props => props.empty ? 'align-items: center;' : ''}
    background: #FFFFFF;
    width: 100%;
    height: 446px;
    padding-left: ${props => props.empty ? '21%' : '12px'};
    padding-right: ${props => props.empty ? '21%' : '12px'};
    border-radius: 5px;
    margin-bottom: 13px;
    h3{
        color: #868686;
        font-size: 18px;
        text-align: center;
        font-weight: 400;
    }
`;