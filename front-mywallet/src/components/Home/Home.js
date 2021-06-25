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
            <MoneyContainer empty={false}>
                <BalanceList>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem><BalanceItem signal="pos">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    <BalanceItem signal="neg">
                        <h4><span>30/11</span>  Descrição</h4>
                        <p>123,22</p>
                    </BalanceItem>
                    
                </BalanceList>
                <BalanceItem signal="pos">
                    <h3>SALDO</h3>
                    <p>2849,66</p>
                </BalanceItem>
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
    padding: ${props => props.empty ? '21%' : '12px'};
    border-radius: 5px;
    margin-bottom: 13px;
    h3{
        color: #868686;
        font-size: 18px;
        text-align: center;
        font-weight: 400;
    }
`;

const BalanceList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    overflow-y: scroll;
`;

const BalanceItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 16px;
    h4{
        color: #000000;
        span{
            color: #C6C6C6;
        }
    }
    p{
        color: ${props => props.signal === "pos" ? 
        '#03AC00' : '#C70000'};
    }
    h3{
        font-size: 17px;
        font-weight: 700;
        color: #000000;
    }
`;