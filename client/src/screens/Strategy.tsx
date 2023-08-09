import styled from "styled-components";
import Header from "../components/common/Header";
import { StrategyBoxSkeleton } from "../components/strategy/skeletons/StrategyBoxSkeleton";
import StrategyContainer from "../components/strategy/StrategyContainer";
import { Suspense } from "react";
import AsyncWrapper from "../components/error/AsyncWrapper";
import ErrorPage from "../components/error/ErrorPage";
import Spinner from "../components/error/Spinner";

export default function Strategy(){
    return <Container>
                <Header/>
                <Center>
                    <Wrapper>
                    <AsyncWrapper errorFallback={<ErrorPage/>} suspenseFallback={<Spinner/>}>
                        <StrategyContainer/>
                    </AsyncWrapper>
                    </Wrapper>
                </Center>
            </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    margin-bottom: 2rem;
    margin-left: 7.5rem;
    gap: 1.0rem;
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5rem 10rem;
    gap: 3.5rem;

`