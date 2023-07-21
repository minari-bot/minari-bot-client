import styled from "styled-components"

export function StrategyBoxSkeleton(){
    return <Container>
        <Header>
            <ProfileInfo>
                <Logo/>
                <Author/>
            </ProfileInfo>
            <Logos>
                <Logo/>
                <Logo/>
            </Logos>
        </Header>
        <Contents>
            <Content>
                <SymbolInfo>
                    <Logo/>
                    <SymbolName/>
                    <ReverageMag/>
                </SymbolInfo>
                <Title/>
            </Content>
            <Content>
                <InfoWrapper>
                    <Info>
                        <Label/>
                        <Value/>
                    </Info>
                    <Info>
                        <Label/>
                        <Value/>
                    </Info>
                    <Info>
                        <Label/>
                        <Value/>
                    </Info>
                </InfoWrapper>
            </Content>
        </Contents>
        <Footer>
            <Label/>
            <Button/>
        </Footer>
    </Container>
}
const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 0.5fr 1fr 0.3fr;
    width: 40rem;
    height: 17rem;
    border-radius: 15px;
    box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.02);
    padding: 1rem  2rem;
    background-color: ${props => props.theme.light.white};
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    img {
        width: 3rem;
        height: 3rem;
    }
`
const Logo = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 30px;
    background-color: ${props => props.theme.light.borderGray};
`
const Logos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.75rem;
`
const Author = styled.div`
    width: 10rem;
    height: 1.7rem;
    background-color: ${props => props.theme.light.borderGray};
`
const Contents = styled.div`
    display: grid;
    grid-template-columns: 3fr 4fr;
    border-top: 1px solid ${props => props.theme.light.borderGray};
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`
const SymbolInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
const Button = styled.div`
    background-color: ${props => props.theme.light.borderGray};
    width: 5rem;
    height: 2.4rem;
    border-radius: 8px;
`
const SymbolName = styled.div`
    background-color: ${props => props.theme.light.borderGray};
    width: 6rem;
    height: 1.5rem;

` 
const Title = styled.div`
    width: 9.5rem;
    height: 2rem;
    background-color: ${props => props.theme.light.borderGray};
`
const ReverageMag = styled.div`
    width: 2rem;
    height: 1.5rem;
    background-color: ${props => props.theme.light.borderGray};

`
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > div:not(:last-of-type){
        border-right: 1px solid ${props => props.theme.light.borderGray};
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1.5rem;
`
const Label = styled.div`
    background-color: ${props => props.theme.light.borderGray};
    width: 3.6rem;
    height: 1.8rem;
`
const Value = styled.div`
    background-color: ${props => props.theme.light.borderGray};
    width: 2rem;
    height: 1.5rem;
`
