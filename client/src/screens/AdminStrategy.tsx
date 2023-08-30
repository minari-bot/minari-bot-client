import styled from "styled-components"
import Header from "../components/common/Header"
import ImgButton from "../components/common/ImgButton"
import { EXCHANGE } from "../global/type";
import { Suspense, useState } from "react";
import upbitLogo from "../assets/img/upbit_logo.png"
import binanceLogo from "../assets/img/binance_logo.svg.png"
import StrategyContainer from "../components/admin/StrategyContainer";
import StrategyForm from "../components/admin/StrategyForm";
import EditForm from "../components/admin/EditForm";
import { StrategyBoxSkeleton } from "../components/admin/skeletons/StrategyBoxSkeleton";
import AsyncWrapper from "../components/error/AsyncWrapper";
import ErrorPage from "../components/error/ErrorPage";
import Spinner from "../components/error/Spinner";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import React from 'react';

export const rightSideUIState ={
    edit : "edit",
    create : "create",
}

function Payment() {
    
    /* 2. 결제 데이터 정의하기 */
    const pamentData = {
        pg: 'nice',                          // PG사
        pay_method: 'card',                  // 결제수단
        amount: 100,                         // 결제금액
        name: 'STANDARD',                    // 주문명   BASIC, STANDARD, PREMIUM 
    };

    const periodMonth = 1 // 개월수 1, 3, 6, 12 혹은 1, 6, 12


    /* 결제 여부 체크 */
    async function paymentStatus() {
        const res = await axios.get(`/api/payment/status`);
        console.log(res.data)
        return res.data
    }

    async function onClickPayment() {
        /* 결제 여부 체크 */
        const payStatus = await paymentStatus();
        if (!payStatus) {
            window.alert("확인 버튼을 누르면 결제창으로 넘어 갑니다.");
            /* 1. 가맹점 식별하기 */
            // @ts-ignore
            const { IMP } = window;
            IMP.init('imp62348574');
            
            /* 4. 결제 창 호출하기 */
            IMP.request_pay(pamentData, callback);
        } else {
            window.alert("이미 결제한 유저입니다!!");
            return 
        }
    }
    
    /* 3. 콜백 함수 정의하기 */
    async function callback(response: any) {
        const {
            success,
            error_msg,
        } = response;
        
        if (success) {
            const postData = {
                pg: pamentData.pg, 
                impUid: 'imp62348574',                         
                pay_method: pamentData.pay_method,                 
                amount: pamentData.amount,                        
                paymentStatus: 'PAYMENT',
                paymentForm: pamentData.name,
                periodMonth,
                paymentDate: null,
            }
            const res = await axios.post(`/api/payment`, postData);
            if (res) alert(`${pamentData.name} 결제 성공`);
            
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    }
  
    return (
      
      <button onClick={onClickPayment}>결제하기 임시 버튼</button>
    );
}


class CancelPay extends React.Component {
    cancelPay = () => {
      axios({
        url: "{환불요청을 받을 서비스 URL}", // 예: http://www.myservice.com/payments/cancel
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { 
          merchant_uid: "{결제건의 주문번호}", // 주문번호
          cancel_request_amount: 2000, // 환불금액
          reason: "테스트 결제 환불", // 환불사유
          refund_holder: "홍길동", // [가상계좌 환불시 필수입력] 환불 수령계좌 예금주
          refund_bank: "88",// [가상계좌 환불시 필수입력] 환불 수령계좌 은행코드(예: KG이니시스의 경우 신한은행은 88번)
          refund_account: "56211105948400", // [가상계좌 환불시 필수입력] 환불 수령계좌 번호
        }
      });
    }
    
    render() {
      return <button onClick={this.cancelPay}>환불하기</button>;
    }
  }

export default function AdminStrategy(){
    const [exchangeSelect, setExchangeSelect] = useState(EXCHANGE.binance);
    const [rightSideUIMode, setRightSideUIMode] = useState(rightSideUIState.create);
    return <>
    <Helmet><title>전략 관리</title></Helmet>
    <AsyncWrapper errorFallback={<ErrorPage/>} suspenseFallback={<Spinner/>}>
        <Container>
            <Header/>
    
            <Payment />
            <CancelPay />

            <Title>전략 관리</Title>
            <Icons>
                <ImgButton onClick={() => setExchangeSelect(EXCHANGE.binance)} title={EXCHANGE.binance} isSelect={exchangeSelect === EXCHANGE.binance} img={binanceLogo}/>
                <ImgButton onClick={() => setExchangeSelect(EXCHANGE.upbit)} title={EXCHANGE.upbit} isSelect={exchangeSelect === EXCHANGE.upbit} img={upbitLogo}/>
            </Icons>
            <Main>
                <ListContainer>
                    <Suspense fallback={Array(6).fill(0).map((t, i) => <StrategyBoxSkeleton key={i}/>)}>
                        <StrategyContainer exchange={exchangeSelect} setRightSideUIMode={setRightSideUIMode}/>
                    </Suspense>
                </ListContainer>
                <SideWrapper>
                    {
                        rightSideUIMode === rightSideUIState.create? 
                        <StrategyForm exchange={exchangeSelect}/>
                        :
                        <EditForm exchange={exchangeSelect} />
                    }
                    
                </SideWrapper>
            </Main>
        </Container>
    </AsyncWrapper>
    </>
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.0rem;
`
const Title = styled.h1`
    color: ${props => props.theme.light.black};
    font-size: 2.6rem;
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
`
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 7rem;
    padding-bottom: 8rem;
`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 15px;
    width: 41.5rem;
`
const SideWrapper = styled.div`
    width: 35rem;
`