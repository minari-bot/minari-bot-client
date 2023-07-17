import styled from "styled-components"
import { apiKey } from "../../apis/apiKey";
import { EXCHANGE } from "../../global/type";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import useKeyList from "./hooks/useKeyList";
import { useMutation } from "@tanstack/react-query";
import { rightSideUIState } from "../../screens/Api";
import { useSetRecoilState } from "recoil";
import { toastState } from "../../atoms/toast";
import { MUTATE_SUCCESS_MESSAGE } from "../../react-query/constants";

interface Props{
    exchange : EXCHANGE,
    setSelectedKeyId : React.Dispatch<React.SetStateAction<string>>,
    setRightSideUIMode : React.Dispatch<React.SetStateAction<string>>,
    setLabel: React.Dispatch<React.SetStateAction<string>>,

}
export default function KeyList({exchange, setSelectedKeyId, setRightSideUIMode, setLabel} : Props){
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const setToast = useSetRecoilState(toastState);
    const onClickKey = (e : React.MouseEvent<HTMLDivElement>) => {
        setRightSideUIMode(rightSideUIState.keyInfo); 
        setSelectedIndex(Number(e.currentTarget.dataset.index));
        setSelectedKeyId(e.currentTarget.id);
        setLabel(String(e.currentTarget.dataset.label));
    }
    const onDelete = async (id : string) => {
        await mutateAsync(id);
        setToast(prev => ({
            ...prev,
            text: MUTATE_SUCCESS_MESSAGE.DELETE_API_KEY,
            state: 'success',
            isOpen: true,
        }))
        refetch();
    }
    const onClickAdd = () => {
        setSelectedIndex(null);
        setRightSideUIMode(rightSideUIState.keyAdd);
    }
    const { data : keyList, refetch} = useKeyList();
    const { mutateAsync } = useMutation((apiKey.deleteApiKey));
    
    return <Container>
            <Title>API Keys</Title>
            {
                keyList.map((info, key) => 
                exchange === info.exchange?
                <InfoBox key={info._id} isSelect={key === selectedIndex} onClick={onClickKey} data-index={key} data-label={info.label} id={info._id}>
                    <Dot/>
                    <TitleLabel>{info.label}</TitleLabel>
                    <Contents>
                        <ListLabel>
                        <div>API Key</div>
                        <div>Secret Key</div>
                        </ListLabel>
                        <Info>
                            <div>{info.apikey}</div>
                            <div>{"*".repeat(50)}</div>
                        </Info> 
                        <DeleteButton onClick={() => onDelete(info._id)}><TfiClose/>
                        </DeleteButton>
                    </Contents>
                </InfoBox>
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
const InfoBox = styled.div<{isSelect : boolean}>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    width: 100%;
    padding: 2rem 2.5rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 15px;
    font-size: 1.2rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    box-shadow: ${props => props.isSelect? `inset 0px 0px 0px 1.5px ${props.theme.light.green}`: "0px 2px 10px rgba(0, 0, 0, 0.05)"};
    &:hover{
        background: ${props => props.isSelect? props.theme.light.white : props.theme.light.borderGray};
    }
`
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
const TitleLabel = styled.h2`
    font-size: 1.5rem;
    text-align: left;
`
const Contents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
`

const ListLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-right: 1rem;
    border-right:  0.5px solid ${props => props.theme.light.borderGray};
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    font-size: 0.9rem;
`
const DeleteButton = styled.button`
    position: absolute;
    right: 1.0rem;
    top: 1.0rem;
    font-size: 1.0rem;
`
const Dot = styled.div`
    position: absolute;
    left: 1.0rem;
    top: 1.0rem;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: ${props => props.theme.light.linearGreen};
`