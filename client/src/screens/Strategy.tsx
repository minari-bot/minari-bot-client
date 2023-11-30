import styled from "styled-components";
import Header from "../components/common/Header";
import StrategyContainer from "../components/strategy/StrategyContainer";
import { Helmet } from "react-helmet-async";
import { useMediaQueries } from "../components/hooks/useMediaQueries";
import AsyncWrapper from "../components/error/AsyncWrapper";
import Spinner from "../components/error/Spinner";

export default function Strategy(){
    const { isPc } = useMediaQueries();
    return <>
        <Helmet><title>전략 구독</title></Helmet>
        <Container>
            { isPc && <Header/> }
            <Center>
                <Wrapper>
                    <AsyncWrapper suspenseFallback={<Spinner/>}>
                        <StrategyContainer/>
                    </AsyncWrapper>
                </Wrapper>
            </Center>
        </Container>
    </>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    margin-bottom: 2rem;
    gap: 1.0rem;
    @media screen and (max-width: 1279px){
        padding-top: 7.5rem;
    }
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5rem 10rem;
    gap: 3.5rem; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5rem 0;
    gap: 3.5rem;
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
    }
`