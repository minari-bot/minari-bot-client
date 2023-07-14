import { ReactNode } from "react"
import styled from "styled-components"
interface Props {
    children : ReactNode
}
export default function HistoryContainer({children} : Props){
    return <Container>
    <Labels>
      <li>심볼</li>
      <li>거래가</li>
      <li>수량</li>
      <li>사이드</li>
      <li>실현 수익</li>
      <li>거래 시간</li>
    </Labels>
    {children}
  </Container>
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.0rem 1rem;
  width: 70rem;
  height: 40rem;
  border-radius: 35px;
  padding: 2rem 1.2rem;
  padding-top: 0rem;
  box-shadow: 4px 4px 60px 6px rgba(0, 0, 0, 0.05);
  background-color: ${props => props.theme.light.white};
  overflow-y: auto;
`
const Labels = styled.ul`
  position: sticky;
  top: -5px;
  height: 5rem;
  width: 100%;
  background-color: ${props => props.theme.light.white};
  font-size: 1.5rem;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr 0.5fr 1fr 1fr;
  text-align: center;
  list-style: none;
  padding: 2rem 0;
`