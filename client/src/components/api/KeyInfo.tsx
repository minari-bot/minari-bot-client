import styled from "styled-components"
import { SlCheck, SlBan} from "react-icons/sl";
import theme from "../../styles/theme";
import { useKeyInfo } from "./hooks/useKeyInfo";
import { makeRoundNumber } from "../../utils/makeString";
import KeyInfoSkeleton from "./skeletons/KeyInfoSkeleton";
import { ReactComponent as ArrowBack } from "../../assets/svg/arrow_back.svg";
import { rightSideUIState } from "../../screens/Api";
import AsyncWrapper from "../error/AsyncWrapper";
import ErrorComponent from "../error/ErrorComponent";


interface Props{
    selectedKeyId : string, 
    label : string,
    setRightSideUIMode: React.Dispatch<React.SetStateAction<string>>

}
export default function KeyInfo({ selectedKeyId, label, setRightSideUIMode } : Props){
    const info = useKeyInfo(selectedKeyId);
    const onClose = () => {
        setRightSideUIMode(rightSideUIState.none);
    }
    return(
    <AsyncWrapper suspenseFallback={<KeyInfoSkeleton/>}>
        <Container>
            <Header>
                <Title>{label}</Title>
                <CloseButton onClick={onClose}>
                    <ArrowBack/>
                </CloseButton>
            </Header>
            <Wrapper>
                <Labels>
                    <div>Balance</div>
                    <div>Transactions</div>
                    <div>Connection</div>
                </Labels>
                <Info>
                    <div>{makeRoundNumber(info?.balance || 0, 2) + " USDT"}</div>
                    <div>{`${info?.transaction || 0} 회`}</div>
                    <div>{info?.connect? <SlCheck style={{
                        color: theme.light.darkBlue
                    }}/> 
                    : <SlBan style= {{
                        color: theme.light.red,
                    }}
                    />}</div>
                </Info>
            </Wrapper>
        </Container>
    </AsyncWrapper>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap:1.5rem;
    width: 100%;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 2rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 15px;
    font-size: 1.2rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    text-align: center;
`
const Title = styled.h1``
const Labels = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
    padding-bottom: 1rem;
`
const Info = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 1.2rem;
    font-weight: bold;
    svg{
        font-size: 2rem;
    }
`
const CloseButton = styled.button`
    cursor: pointer;
    svg{
        width: 2.5rem;
        height: 2.5rem;
    }
    padding-top: 0.3rem;
`