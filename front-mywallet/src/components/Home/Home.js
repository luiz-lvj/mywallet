import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import UserContext from "../contexts/UserContex";
import { IoEnterOutline } from "react-icons/io5";
import InputMoney from "./InputMoney";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Home(){
    const {user, setUser} = useContext(UserContext);
    const history = useHistory();
    const [balanceItems, setBalanceItems] = useState([]);
    const [balanceTotal, setBalanceTotal] = useState(0);
    const [loadingBalance, setLoadingBalance] = useState(false);
    useEffect(()=>{
        if(!user.id){
            return
        }
        const url = `http://localhost:4000/balance/${user.id}`

        const balancePromise = axios.get(url);
        balancePromise.then(response => {
            setBalanceItems(response.data);
        });
        balancePromise.catch(err =>{
            alert('Não foi possível pegar suas entradas e saídas.')
        })

    }, []);

    function getBalance(){
        let balance = 0;
        balanceItems.forEach(item =>{
            if(item.type === "entrance"){
                balance += item.value;
            } else{
                balance -= item.value;
            }
        });
        if(balance < 0){
            return ["neg", String((-balance/100).toFixed(2)).replace('.', ',')];
        }
        return ["pos", String((balance/100).toFixed(2)).replace('.', ',')];
    }
    
   
    return(
        <Homepage>
            <HeaderHome>
                <h2>Olá, {user.name}</h2>
                <IoEnterOutline
                    color="#FFFFFF"
                    size="26px"
                    onClick={()=> history.push("/login")}/>
            </HeaderHome>
            <MoneyContainer empty={balanceItems.length === 0}>
                { balanceItems.length === 0 ?
                <h3>Não há registros de entrada ou saída</h3>
                : <>
                <BalanceList>
                    {balanceItems.map(item =>{
                        const day = new Date(item.date).getDate();
                        const month = new Date(item.date).getMonth();
                        const strDay = parseInt(day) > 9 ? parseInt(day) : '0' + parseInt(day);
                        const strMonth = parseInt(month) > 9 ? parseInt(month) : '0' + parseInt(month);
                        const strDate = `${strDay}/${strMonth}`;
                        return(
                            <BalanceItem signal={item.type === "entrance" ? "pos": "neg"}>
                                <h4><span>{strDate}</span>    {item.description}</h4>
                                <p>{String((item.value/100).toFixed(2)).replace('.', ',')}</p>
                            </BalanceItem>
                        );
                    })}
                </BalanceList>
                <BalanceItem signal={getBalance()[0]}>
                    <h3>SALDO</h3>
                    <p>{getBalance()[1]}</p>
                </BalanceItem></>
                }
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