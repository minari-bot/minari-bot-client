import styled from "styled-components";
import StrategyBox from "./StrategyBox";
import { useQuery } from "react-query";
import { strategy } from "../../apis/strategy";
import { AxiosError } from "axios";

export default function Strategies(){
    const { data, isLoading, isError, error } = useQuery(["strategies"] , () => strategy.getAllUserSubscribeItem(),{
        onError: (err) => {
          const error = err as AxiosError;
          console.log(error);
        },
        onSuccess: (recevied) => {
        }
      });
    return <>
        <Head>
            <h1>구독 전략</h1>
            <StrategyCount>3</StrategyCount>
        </Head>
        <StrategyBox symbolName="ETH/USDT" magnitude={3} title="DC돌파전략" winRate={50} profit={30} trasanctions={34}></StrategyBox>
        <StrategyBox symbolName="ETH/USDT" magnitude={3} title="DC돌파전략" winRate={50} profit={30} trasanctions={34}></StrategyBox>
        <StrategyBox symbolName="ETH/USDT" magnitude={3} title="DC돌파전략" winRate={50} profit={30} trasanctions={34}></StrategyBox>
    </>
}
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
`
const StrategyCount = styled.div`
    font-weight: 700;
    border-radius: 5px;
    background-color: ${props => props.theme.light.borderGray};
    color: ${props => props.theme.light.darkGray};
    padding: 0.2rem 0.5rem;
`