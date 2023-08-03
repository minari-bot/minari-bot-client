import styled from "styled-components"
import { Skeleton } from "../../common/Skeleton"

export default function KeyBox(){
    return <InfoBox>
                <TitleLabel></TitleLabel>
                <Contents>
                    <ListLabel>
                        <Label/>
                        <Label/>
                    </ListLabel>
                    <Info>
                        <Key/>
                        <Key/>
                    </Info> 
                </Contents>
            </InfoBox>
}
const InfoBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    width: 100%;
    padding: 2rem 2.5rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 15px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
`
const TitleLabel = styled(Skeleton)`
    width: 100%;
    height: 1.8rem;
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
const Label = styled(Skeleton)`
    width: 6rem;
    height: 1.5rem;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
`
const Key = styled(Skeleton)`
    width: 30rem;
    height: 1rem;
`