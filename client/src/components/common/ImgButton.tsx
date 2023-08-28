import styled from "styled-components"

interface SmallButtonProps{
    isSelect: boolean,
    title : string,
    img : string,
    onClick: () => void;
}
export default function ImgButton({onClick, isSelect, title, img} : SmallButtonProps){
    if(isSelect) return <ClickedWrapper><img src={img} alt={title}/></ClickedWrapper>
    else return <Wrapper onClick={onClick}><img src={img} alt={title}/></Wrapper>
}

const ClickedWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    background: ${props => props.theme.light.green};
    font-size: 1.2rem;
    border-radius: 15px;
    font-weight: bold;
    box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
    img {
        width: 3.5rem;
        height: 3.5rem;
    }
    cursor: pointer;
`
const Wrapper = styled(ClickedWrapper)`
    background: ${props => props.theme.light.white};
    &:hover{
        background: ${props => props.theme.light.borderGray};
    }
`