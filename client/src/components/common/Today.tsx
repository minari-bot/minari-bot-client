import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
export default function Today(){
    const [date, setDate] = useState(dayjs().format("YYYY년 MM월 DD일"));
    return <Wrapper>
        {date}
    </Wrapper>
}
const Wrapper = styled.div`
    
`