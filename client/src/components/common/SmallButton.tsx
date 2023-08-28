import styled from "styled-components"

interface SmallButtonProps{
    onClick : () => void,
    isSelect: boolean,
    title : string,
}
export default function SmallButton({onClick, isSelect, title} : SmallButtonProps){
    if(isSelect) return <ClickedWrapper>{title}</ClickedWrapper>
    else return <Wrapper onClick={onClick}>{title}</Wrapper>
}

const ClickedWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 6rem;
    height: 4.5rem;
    font-size: 1.2rem;
    border-radius: 15px;
    font-weight: bold;
    box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
    background: ${props => props.theme.light.green};
    cursor: pointer;
`
const Wrapper = styled(ClickedWrapper)`
    background: ${props => props.theme.light.white};
    &:hover{
        background: ${props => props.theme.light.borderGray};
    }
`
