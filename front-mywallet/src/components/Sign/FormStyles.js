import styled from 'styled-components';

export const FormStyle = styled.form`
    width: 89%;
    max-width: 368px;
    margin-bottom: 36px;
    margin-top: 28px;
`;

export const ButtonForm = styled.button`
    width: 100%;
    height: 46px;
    background: #A328D6;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
`;

export const InputForm = styled.input`
    width: 100%;
    height: 58px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    color: #000000;
    font-size: 20px;
    font-weight: 400px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    &::placeholder{
        color: #000000;
        font-size: 20px;
        font-weight: 400px;
    }
`;

export function WalletMainTitle(){
    return(
        <MainTitle>MyWallet</MainTitle>
    );
}


const MainTitle = styled.h1`
    font-family: 'Saira Stencil One';
    font-size: 32px;
    color: #FFFFFF;
`;