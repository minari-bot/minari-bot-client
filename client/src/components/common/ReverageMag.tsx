import styled from "styled-components"

export default function ReverageMag({value} : {value : number}){
  if(value === 0) return <></>  
  return <Wrapper>{value}x</Wrapper>
}


const Wrapper = styled.div`
  border-radius: 5px;
  background-color: #FFF7D9;
  font-weight: bold;
  font-size: 1.1rem;
  color: #DB9E00;
  padding: 0.3rem 0.5rem;
  @media screen and (max-width:767px){
    padding: 0.1rem 0.25rem; 
    font-size: 1rem;

  }
`