import styled from "styled-components"
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import useKeyList from "./hooks/useKeyList";
import { rightSideUIState } from "../../screens/Api";
import KeyBox from "./KeyBox";

interface Props{
    exchange : string,
    setSelectedKeyId : React.Dispatch<React.SetStateAction<string>>,
    setRightSideUIMode : React.Dispatch<React.SetStateAction<string>>,
    setLabel: React.Dispatch<React.SetStateAction<string>>,

}
export default function KeyList({exchange, setSelectedKeyId, setRightSideUIMode, setLabel} : Props){
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const onClickAdd = () => {
        setSelectedIndex(null);
        setRightSideUIMode(rightSideUIState.keyAdd);
    }
    const onClickKey = (e : React.MouseEvent<HTMLDivElement>) => {
        setRightSideUIMode(rightSideUIState.keyInfo); 
        setSelectedIndex(Number(e.currentTarget.dataset.index));
        setSelectedKeyId(e.currentTarget.id);
        setLabel(String(e.currentTarget.dataset.label));
    }
    const { data : keyList, refetch} = useKeyList();
    
    return <Container>
            <Title>API Keys</Title>
            {
                keyList.map((info, i) => 
                exchange === info.exchange.toLowerCase()?
                <KeyBox keyInfo={info} refetch={refetch} selectedIndex={selectedIndex} onClickKey={onClickKey} key={info._id} index={i}/>
                :
                null
                )
            }
            <AddBox onClick={onClickAdd}>
                <IoAddSharp/>
            </AddBox>
        </Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 15px;
    width: 50rem;
    `
const Title = styled.h1``

const AddBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    background-color: ${props => props.theme.light.whiteTransparent};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    font-size: 3rem;
    border-radius: 15px;
    &:hover{
        background: ${props => props.theme.light.borderGray};
    }
    
`