import styled from "styled-components"
import { Skeleton } from "../../common/Skeleton"

export const OrderInfoSkeleton = () => (
    <Container>
        <FlexWrapper>
            <Symbol/>
            <Title/>
        </FlexWrapper>
        <FlexWrapper>
            <Price/>
            <ReverageMag/>
        </FlexWrapper>
        <Wrapper><Quantity/></Wrapper>
        <Wrapper><Side/></Wrapper>
        <Wrapper><Title/></Wrapper>
        <Wrapper><Date/></Wrapper>
  </Container>
)
const Container = styled.div`
  width:  100%;
  height: 3rem;
  background-color: ${props => props.theme.light.white};
  border-radius: 2.5rem;
  grid-template-columns: 1fr 0.75fr 0.25fr 0.25fr 0.5fr 1fr;
  display: grid;
`
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
`
const Price = styled(Skeleton)`
  width: 5rem;
  height: 1.5rem;
`
const Symbol = styled(Skeleton)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;  
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  justify-content: flex-end;
  align-items: center;
  height: 3rem;
  min-width: 6rem;
  text-align: center;
  white-space: nowrap;
`
const ReverageMag = styled(Skeleton)`
  width: 2rem;
  height: 1.5rem;
`
const Date = styled(Skeleton)`
  width: 10rem;
  height: 1.5rem;
`
const Side = styled(Skeleton)`
  border-radius: 25px;
  width: 3.5rem;
  height: 1.5rem;
`
const Quantity = styled(Skeleton)`
  width: 5rem;
  height: 1.5rem;
`
const Title = styled(Skeleton)`
  width: 5.5rem;
  height: 1.5rem;
`
