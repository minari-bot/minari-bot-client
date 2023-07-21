import styled from "styled-components"
import useKeyList from "../api/hooks/useKeyList"
import Symbol from "../common/Symbol";
import { TfiClose } from "react-icons/tfi";
import { strategy } from "../../apis/strategy";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { toastState } from "../../atoms/toast";
import { MUTATE_SUCCESS_MESSAGE } from "../../react-query/constants";
import { CustomErrorClass } from "../../global/error";

interface Props{
    exchange : string,
    setKeySelectUI: React.Dispatch<React.SetStateAction<boolean>>
}
export default function KeySelect({exchange, setKeySelectUI} : Props){
    const {data } = useKeyList();
    const { mutateAsync } = useMutation(strategy.SubscribeStrategy);
    const setToast = useSetRecoilState(toastState);
    const onClick = async (id : string, label : string) => {
        try{
            await mutateAsync({id, label});
            setToast(prev => ({
                ...prev,
                text: MUTATE_SUCCESS_MESSAGE.ADD_SUBSCRIBE,
                state: 'success',
                isOpen: true,
            }))
        } 
        catch(err){
            const error = err as CustomErrorClass;
            setToast(prev => ({
                ...prev,
                text: error.message,
                state: 'error',
                isOpen: true,
            }))
        }
    }
    return <Container>
            <Header>
                <Title>API Key 선택</Title>
            </Header>
            <Contents>
            {
                data.map((info) => info?.exchange?.toLowerCase() === exchange && 
                <Wrapper key={info._id} onClick={() => onClick(info._id, info.label)}>
                    <KeyTitle>
                        <Symbol name={exchange?.toLowerCase()}/>
                        <Label>{info.label}</Label>
                    </KeyTitle>
                    <Dot/>
                </Wrapper>
                )
            }
            </Contents>
            <ExitButton onClick={() => setKeySelectUI(false)}><TfiClose/></ExitButton>
    </Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 40rem;
    border-radius: 15px;
    box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.02);
    padding: 1rem  2rem;
    padding-bottom: 0;
    background-color: ${props => props.theme.light.white};
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width:100%;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
    padding: 0.75rem 2rem;
    /* box-sizing: border-box; */
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    padding-top: 0;

`
const Title = styled.h2`
    font-size: 1.4rem;
`
const Label = styled.span`
    font-weight: 500;
    font-size: 1.4rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    svg {
        width: 1.75rem;
        height: 1.75rem;
    }
    padding: 1rem 2rem;
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
    &:hover{
     background-color: ${props => props.theme.light.borderGray};  
    }
    box-sizing: content-box;
    cursor: pointer;
`
const KeyTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`

const Dot = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: ${props => props.theme.light.linearGreen};
`
const ExitButton = styled.button`
    position: absolute;
    right: 1.0rem;
    top: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
`