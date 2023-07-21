import styled from "styled-components"
import { SlCheck, SlBan} from "react-icons/sl";
import theme from "../../styles/theme";
import { useKeyInfo } from "./hooks/useKeyInfo";
import { Suspense } from "react";
import { makeRoundNumber } from "../../utils/makeString";

interface Props{
    selectedKeyId : string, 
    label : string,
}
export default function KeyInfo({ selectedKeyId, label } : Props){
    const info = useKeyInfo( selectedKeyId );
    /*
        TODO:
        checkApiKey가 key정보를 요구해서, 호출할 수가 없음
        keyId만으로 호출 할 수 있도록, 수정 후 반영
        
    */
    return(
    <Suspense fallback={<div>loading..</div>}>
        <Container>
            <Title>{label}</Title>
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
                {/* {!info?.connect && <Error>error reason.</Error>} */}
            </Wrapper>
        </Container>
    </Suspense>

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
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width : 100%;
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
const Error = styled.div`
    color: ${props => props.theme.light.red};
    width: 100%;
`