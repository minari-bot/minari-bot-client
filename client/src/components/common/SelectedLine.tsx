import styled from "styled-components";

export const SelectedLine = styled.span<{here : boolean}>`
    padding-bottom:5px;
    border-bottom: 3px solid ${props => props.theme.light.lightBlue};
    border: ${props=> props.here? "" : "none"};
`