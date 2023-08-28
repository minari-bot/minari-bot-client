import { DAY_BUTTON, DAY_BUTTON_ENUM, EXCHANGE_BUTTON } from "./type";
import { Suspense, useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { OverviewBoxSkeleton } from "./skeletons/OverviewBoxSkeleton";
import Overview from "./Overview";
import Spinner from "../error/Spinner";
import AsyncWrapper from "../error/AsyncWrapper";
import styled from "styled-components";

interface Props{
    day: DAY_BUTTON,
    exchangeSelect : EXCHANGE_BUTTON
}
export default function OverviewContainer({day, exchangeSelect} : Props){
    const getDiffDay = useCallback(() => {
        const today = dayjs();
        switch (day) {
            case DAY_BUTTON_ENUM.week:
                return today.subtract(7, "day").format();
            case DAY_BUTTON_ENUM.month:
                return today.subtract(1, "month").format();
            case DAY_BUTTON_ENUM.month3:
                return today.subtract(3, "month").format();
            default:
                return today.subtract(6, "month").format();
        }
    },[day])
    const [diffDay, setDiffDay] = useState(() => getDiffDay());

    useEffect(() => {
        setDiffDay(getDiffDay());
    }, [day, getDiffDay]);

    return <Container>
        <AsyncWrapper suspenseFallback={<>{Array(4).fill(0).map((item, i) => <OverviewBoxSkeleton key={i}/>)}</>} errorFallback={<Spinner/>}>
            <Overview exchange={exchangeSelect} diffDay={diffDay}/>
        </AsyncWrapper>
    </Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 767px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`