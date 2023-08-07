import styled from "styled-components"
import ReverageMag from "../common/ReverageMag"
import Symbol from "../common/Symbol"
import { useState } from "react";
import deleteIcon from "../../assets/svg/delete.svg"
import addIcon from "../../assets/svg/library_add.svg"
import disabled from "../../assets/svg/disabled.svg"
import setting from "../../assets/svg/setting.svg";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { admin } from "../../apis/admin";
import { useUser } from "../../hooks/useUser";
import { CustomErrorClass } from "../../global/error";
import { useToast } from "../../atoms/toast";
import { MUTATE_SUCCESS_MESSAGE } from "../../react-query/constants";
import { useAllAlertStrategy } from "./hooks/useAllAlertStrategy";
import { useRecoilState } from "recoil";
import { selectedStrategy } from "../../atoms/adminStrategy";
import { rightSideUIState } from "../../screens/AdminStrategy";
interface Props{
    symbol: string,
    leverage: number,
    strategyName: string,
    winRate: number,
    profitPercent: number,
    strategyUrl: string,
    exchange : string,
    id: string,
    setRightSideUIMode : React.Dispatch<React.SetStateAction<string>>,
}
export default function StrategyBox({exchange, symbol, leverage, strategyName, winRate, profitPercent, strategyUrl, id, setRightSideUIMode} : Props){
    const [isHover, setHover] = useState(false);
    const [strategy, setStrategy] = useRecoilState(selectedStrategy)
    const {mutateAsync : mutateOpenStrategy} = useMutation(admin.openStrategy);
    const {mutateAsync : mutateCloseStrategy} = useMutation(admin.closeStrategy);
    const {mutateAsync : mutateDeleteStrategy} = useMutation(admin.deleteStrategy);
    const setToast = useToast();
    const {user} = useUser();
    const {data, refetch} = useAllAlertStrategy();
    const onClickAdd = async () => {
        try{
            await mutateOpenStrategy({user, id});
            refetch();
            setToast({state: 'success', text: MUTATE_SUCCESS_MESSAGE.OPEN_STRATEGY});
        } catch(err){
            const error = err as CustomErrorClass;
            setToast({state: 'error', text: error.message});
        }
    }
    const onClickDisabled = async () => {
        try{
            await mutateCloseStrategy({user, id});
            refetch();
            setToast({state: 'success', text: MUTATE_SUCCESS_MESSAGE.CLOSE_STRATEGY});
        } catch(err){
            const error = err as CustomErrorClass;
            setToast({state: 'error', text: error.message});
        }
    }
    const onClickDelete = async () => {
        try{
            await mutateDeleteStrategy({user, id});
            refetch();
            setToast({state: 'success', text: `${strategyName} : ${MUTATE_SUCCESS_MESSAGE.DELETE_STRATEGY}`});
            setRightSideUIMode(rightSideUIState.create);
        } catch(err){
            const error = err as CustomErrorClass;
            setToast({state: 'error', text: error.message});
        }
    }
    const onClickEdit = () => {
        setStrategy({label: strategyName, symbol,leverage, url: strategyUrl, id, exchange})
        setRightSideUIMode(rightSideUIState.edit);
    }
    return <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Column>
            <SymbolItems>
                <Link to={strategyUrl} target="_blank" rel="noopener noreferrer"><Symbol name={"tradingview"}/></Link>
                <Symbol name={symbol?.split('/')[0].toLowerCase() || ""}/>
                <SymbolName>{symbol || ""}</SymbolName>
                <ReverageMag value={leverage || 0}/>
            </SymbolItems>
            <Title>{strategyName || ""}</Title>
        </Column>
        <InfoWrapper>
            {
                isHover? 
                <>
                    <Button onClick={onClickAdd}>
                        <Img src={addIcon}/>
                        <Value>공개</Value>
                    </Button>
                    <Button onClick={onClickDisabled}>
                        <Img src={disabled}/>
                        <Value>비공개</Value>
                    </Button>
                    <Button onClick={onClickEdit}>
                        <Img src={setting}/>
                        <Value>수정</Value>
                    </Button>
                    <Button onClick={onClickDelete}>
                        <Img src={deleteIcon}/>
                        <Value>삭제</Value>
                    </Button>
                </>
                :
                <>
                    <Info>
                        <Label>수익률</Label>
                        <Value>{profitPercent}%</Value>
                    </Info>
                    <Info>
                        <Label>승률</Label>
                        <Value>{winRate}%</Value>
                    </Info>
                    <Info>
                        <Label>거래량</Label>
                        <Value>{0}</Value>
                    </Info>
                </>
            }
        </InfoWrapper>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 38rem;
    gap: 3rem;
    font-size: 1.2rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 1.5rem;
    padding: 1.5rem 1.75rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 10px;
    &:hover{
        background: ${props => props.theme.light.borderGray};
    }

`
const SymbolItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    svg{
        width: 2rem;
        height: 2rem;
    }
    a{
        width: 2rem;
        height: 2rem;
    }
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    > div:not(:last-of-type){
        border-right: 1px solid ${props => props.theme.light.borderGray};
    }
    > button:not(:last-of-type){
        border-right: 1px solid ${props => props.theme.light.borderGray};
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
`
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
`
const Label = styled.div`
    font-weight: bold;
`
const Value = styled.div`
    font-size: 1.2rem;
`
const SymbolName = styled.div`

`
const Title = styled.h3`
    font-size: 1.25rem;
`
const Img = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer
`