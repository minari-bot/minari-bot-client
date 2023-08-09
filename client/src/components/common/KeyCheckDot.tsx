import styled from "styled-components"
import { useKeyInfo } from "../api/hooks/useKeyInfo"

export default function KeyCheckDot({id} : {id : string}){
    const info = useKeyInfo(id);
    return info?.connect? <Green/> : <Red/>
}
const Green = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: ${props => props.theme.light.linearGreen};
`
const Red = styled(Green)`
    background: ${props => props.theme.light.pink};
`