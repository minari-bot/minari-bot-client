import styled from "styled-components"

interface Props{
    title : string
    onClick? : () => void
}
export default function LongSumbitButton({title, onClick} : Props){
    return <Button onClick={onClick}>{title}</Button>
}

const Button = styled.button`
    background-color: ${props => props.theme.light.lightBlue};
    color: ${props => props.theme.light.white};
    padding: 0.8rem 5rem;
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 2rem;
    border-radius: 0.5rem;
    width: 100%;
    &:hover{
        background-color: ${props => props.theme.light.darkBlue};
    }
`