import styled from "styled-components";
import StrategyBox from "../components/strategy/StrategyBox";
import Header from "../components/common/Header";
import { useAllAlertStrategy } from "../components/strategy/hooks/useAllAlertStrategy";
import { StrategyBoxSkeleton } from "../components/strategy/skeletons/StrategyBoxSkeleton";
import { Suspense } from "react";

export default function Strategy(){
    const data = useAllAlertStrategy();
    return <Container>
        {/* <Header/> */}
        <Wrapper>
        {
            data.map(( item ) => <Suspense key={item._id} fallback={<StrategyBoxSkeleton/>} >
                <StrategyBox info={item} />
            </Suspense>)
        }
        </Wrapper>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    margin-bottom: 2rem;
    gap: 1.0rem;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5rem 15rem;
    gap: 2rem;

`