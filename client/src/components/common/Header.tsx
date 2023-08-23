import styled from "styled-components"
import Today from "./Today"
import { LuCalendarDays  } from "react-icons/lu";
import ProfileLogo from "./ProfileLogo";
import { useState } from "react";
import { getStoredUser } from "../../hooks/useUser";

export default function Header(){
    const [user, setUser] = useState(getStoredUser())
    return <Container>
        <Profile>
            <ProfileLogo img={""}/>
            <Title>{`Welcome Back, ${user?.name}`}</Title>
        </Profile>
        <Setting>
            <Date>
                <LuCalendarDays/>
                <Today/>
            </Date>
        </Setting>
    </Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0rem;
    box-sizing: border-box;
    width: 100%;
`
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.25rem;
`
const Setting = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Title = styled.h1`
    font-size: 2.75rem;
    @media screen and (max-width: 1460px){
        font-size: 2.25rem;
    }
`;
const Date = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    font-weight: 400;
    font-size: 2.25rem;
    @media screen and (max-width: 1460px){
        font-size: 2rem;
    }
`