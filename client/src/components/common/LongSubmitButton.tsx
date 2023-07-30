import styled from "styled-components"

interface Props{
    title : string
}
export default function LongSumbitButton({title} : Props){
    return <Button>{title}</Button>
}

const Button = styled.button`
    background-color: ${props => props.theme.light.lightBlue};
    color: ${props => props.theme.light.white};
    padding: 0.8rem 5rem;
    font-size: 1.2rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    width: 100%;
    &:hover{
        background-color: ${props => props.theme.light.darkBlue};
    }
`