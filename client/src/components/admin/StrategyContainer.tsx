import styled from "styled-components";
import StrategyBox from "./StrategyBox";
import { useAllAlertStrategy } from "./hooks/useAllAlertStrategy";
import { IoAddSharp } from "react-icons/io5";
import { rightSideUIState } from "../../screens/AdminStrategy";

interface Props{
    exchange : string,
    setRightSideUIMode : React.Dispatch<React.SetStateAction<string>>,
}
export default function StrategyContainer({exchange, setRightSideUIMode} : Props){
    const {data} = useAllAlertStrategy();
    return <>
    {
        data.filter((item) => item?.exchange?.toLocaleLowerCase() === exchange)
        .map((item, k) => 
            <StrategyBox key={k} exchange={exchange} symbol={item.symbol} leverage={item.leverage} strategyName={item.strategyName} winRate={item.winRate} profitPercent={item.profitPercent} strategyUrl={item.strategyUrl} id={item._id} setRightSideUIMode={setRightSideUIMode}/>
            )
    }   
    <AddBox onClick={() => {setRightSideUIMode(rightSideUIState.create)}}>
        <IoAddSharp/>
    </AddBox>
    </>
}
const AddBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: ${props => props.theme.light.whiteTransparent};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    font-size: 3rem;
    border-radius: 15px;
    &:hover{
        background: ${props => props.theme.light.borderGray};
    }
    
`