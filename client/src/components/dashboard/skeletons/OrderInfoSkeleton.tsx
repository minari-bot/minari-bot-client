import styled from "styled-components"
import { Skeleton } from "../../common/Skeleton"
import { useMediaQueries } from "../../../hooks/useMediaQueries";

export const OrderInfoSkeleton = () => {
  const { isMobile } = useMediaQueries();
    if(isMobile) return <MobileContainer>
      <MobileDateHeader>
        <Date/>
        <MobileSideWrapper>
          <Side/>
          <ReverageMag/>
        </MobileSideWrapper>
      </MobileDateHeader>
      <MobileInfoWrapper>
        <MobileLabelColumn>
          <Title/>
          <Title/>
          <Title/>
          <Title/>
        </MobileLabelColumn>
        <MobileValueColumn>
          <Value/>
          <Value/>
          <Value/>
          <Value/>
        </MobileValueColumn>
      </MobileInfoWrapper>
    </MobileContainer>
    
    return <Container>
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
}
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
const Value = styled(Skeleton)`
  width: 7.5rem;
  height: 1.5rem;
`
const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  :not(:last-child){
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
  }
`
const MobileInfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 3rem;
  :not(:last-child){
    border-bottom: 1px solid ${props => props.theme.light.borderGray};
  }
`
const MobileDateHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.5rem;
`
const MobileLabelColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  gap: 0.5rem;
`
const MobileValueColumn = styled(MobileLabelColumn)`
  font-weight: 400;
  align-items: flex-end;
`
const MobileSideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
`