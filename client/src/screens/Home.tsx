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
            <Title>🌱MINARI BOT</Title>
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
  width: 100%;
  min-height: 100vh;  
  /* max-height: 100vh; */
  background: linear-gradient(to right bottom, rgba(94, 244, 254, 1), rgba(62, 207, 68, 0.65));
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background: linear-gradient(to right bottom, rgba(94, 244, 254, 1), rgba(62, 207, 68, 0.65)); */
  gap: 10rem;
  width: 100%;
  padding: 7.5% 10%;
  @media screen and (max-width: 1280px){
    padding: 10% 12.5%;
  }
  @media screen and (max-width: 767px){
    padding: 10% 5%;
  }

`
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 50%;
  @media screen and (max-width: 1024px){
    width: 100%;
  }
`
const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  @media screen and (max-width: 1680px){
    font-size: 6.75rem;
  }
  @media screen and (max-width: 1460px){
    font-size: 6.25rem;
  }
  @media screen and (max-width: 1280px){
    font-size: 4.5rem;
  }
  @media screen and (max-width: 1024px){
    font-size: 5.75rem;
  }
  @media screen and (max-width: 468px){
    font-size: 4.5rem;
  }
  @media screen and (max-width: 400px){
    font-size: 3.5rem;
  }
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
  font-size: 5.75rem;
  font-weight: bold;
  gap: 0rem;
  line-height: 7.8rem;
  @media screen and (max-width: 1680px){
    font-size: 5rem;
    line-height: 6.5rem;
  }
  @media screen and (max-width: 1460px){
    font-size: 4.75rem;
    line-height: 6rem;
  }
  @media screen and (max-width: 1280px){
    font-size: 4rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 1024px){
    font-size: 4.75rem;
    line-height: 6rem;
  }
  @media screen and (max-width: 468px){
    font-size: 3.75rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 400px){
    font-size: 3rem;
    line-height: 4rem;
  }
`
const Description= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 400;
  @media screen and (max-width: 1680px){
    font-size: 2.25rem;
  }
  @media screen and (max-width: 1460px){
    font-size: 2rem;
  }
  @media screen and (max-width: 1280px){
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1024px){
    font-size: 2rem;
  }
  @media screen and (max-width: 468px){
    font-size: 1.75rem;
  }
  @media screen and (max-width: 400px){
    font-size: 1.5rem;
  }
`
 const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 4.5rem;
  button{
    font-size: 2rem;
    font-weight: bold;
    color: black;
    border-radius: 2.5rem;
    padding: 1rem 3rem;
    height: 6rem;

  }
  @media screen and (max-width: 400px){
    flex-direction: column;
    width: 100%;
    button{
      width: 100%;
      font-size: 1.75rem;
      font-weight: 500;
      height: 4.5rem;
    }
  }
`;
const StartButton = styled.button`
  background-color: rgba(150, 251, 114, 1);
`;
const DocsButton = styled.button`
  background-color: rgba(155, 231, 255, 1);
`;
 const MainImg = styled.img`
    width: 50%;
`;