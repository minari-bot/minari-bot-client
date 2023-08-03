import styled from "styled-components"
import { Skeleton } from "../../common/Skeleton"

export default function KeyInfoSkeleton(){
    return <Wrapper>
        <Labels>
            <Label/>
            <Label/>
            <Label/>
        </Labels>
        <Info>
            <Label/>
            <Label/>
            <Label/>
        </Info>
    </Wrapper>
}


const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem 5rem;
    height: 10rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 15px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
`
const Labels = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
    padding-bottom: 1rem;
`
const Label = styled(Skeleton)`
    width: 7.5rem;  
    height: 1.5rem;
`
const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`