import styled from "styled-components"
interface Props{
    title: string,
    width: number,
    onClick : () => any
}
export default function SubmitButton({title, width, onClick} : Props){
    return <Button width={width} onClick={onClick}>
        {title}
    </Button>
}

const Button = styled.button<{width: number}>`
    background-color: ${props => props.theme.light.lightBlue};
    color: ${props => props.theme.light.white};
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.5rem;
    width: ${props => props.width / 10}rem;
    height: ${props => props.width / 22.5}rem;
    border-radius: 8px;
    box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.02);
    &:hover{
        background-color: ${props => props.theme.light.darkBlue};
    }

`
