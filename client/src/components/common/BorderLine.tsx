import styled from "styled-components"

const BorderLine = styled.span`
    position: absolute;
    bottom: 0;
    width: 100%;
    border: 0.5px solid ${props => props.theme.light.borderGray};
    z-index: 100;
`
export default BorderLine;
