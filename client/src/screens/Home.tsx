import styled from "styled-components";
import mainImg from "../assets/img/mian.page.img.png";
import { Link } from "react-router-dom";
import { useMediaQueries } from "../hooks/useMediaQueries";

export default function Home(){
  const { isPc, isTablet, isMobile } = useMediaQueries();
  return (
      <Container>
        <Wrapper>
          <LeftSection>
            <Title>🌱 Minari Bot</Title>
            <Phrase>
              <div>첫 시스템 트레이딩</div>
              <div><ColorTitle>미나리봇</ColorTitle> 으로</div>
              <div>시작하세요.</div>
            </Phrase>
            <Description>
              <div>자동 거래 시스템으로 편안한 투자를 경험하세요</div>
              <div>시간에 구애 받지 않는 트레이딩을 통해</div>
              <div>투자를 안전하고 수익성 높은 방향으로 이끕니다.</div>
            </Description>
            <Buttons>
              <Link to='auth/signin'><StartButton>지금 시작하기</StartButton></Link>
              <a href="#"><DocsButton>메뉴얼</DocsButton></a>
            </Buttons>
          </LeftSection>
          { isPc && <MainImg src={mainImg} />}
        </Wrapper>
      </Container>
    );
  };
  
 const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right bottom, rgba(94, 244, 254, 1), rgba(62, 207, 68, 0.65));
  background-position: center;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 15rem;
    padding: 5rem 15rem;
    padding-top: 10rem;
`
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`
const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
`;
const ColorTitle = styled.span`
  background: ${props => props.theme.light.linearRed};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Phrase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 6rem;
  font-weight: bold;
`
const Description= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 400;
`
 const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6rem;
  button{
    font-size: 1.8rem;
    font-weight: bold;
    color: black;
  }

`;
const StartButton = styled.button`
  width: 20rem;
  height: 6rem;
  background-color: rgba(150, 251, 114, 1);
  border: none;
  border-radius: 20px;
`;
const DocsButton = styled.button`
  width: 15rem;
  height: 6rem;
  background-color: rgba(155, 231, 255, 1);
  border: none;
  border-radius: 20px;
  margin-left: 20px;
`;
 const MainImg = styled.img`
    width: 50rem;
`;