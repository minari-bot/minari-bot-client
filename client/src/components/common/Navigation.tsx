import styled from "styled-components"
import { Link } from "react-router-dom";
import { SlHome, SlChart, SlKey, SlLock, SlMenu, SlEqualizer, SlLogout } from "react-icons/sl";
import { useState } from "react";
import { getStoredUser, useUser } from "../../hooks/useUser";
import useSignOut from "../auth/hooks/useSignOut";
import { useCookies } from 'react-cookie';

export default function Navigation() {
    const [, , removeCookie] = useCookies(['Minari_Session_Id']);
    const [isShut, setShut] = useState(false);
    const signOutAsync = useSignOut();
    const user = useUser();

    const removeSessionCookie = () => {
        removeCookie('Minari_Session_Id', {domain: 'minari-client-prod.fly.dev'}); // 쿠키 삭제 로직 추가
    }
    const shutNavigation = () =>{
        setShut(prev => !prev);
    }
    const onClick = async () => {
        removeSessionCookie()
        await signOutAsync();
    }
    return <Container isShut={isShut}>
        <ListIcon onClick={shutNavigation}>
            <SlMenu/>
        </ListIcon>
        <Menu isShut={isShut}>
            <Link to='/'>
                <SlHome/>
                <Label>홈</Label>
            </Link>
            <Link to='dashboard'>
                <SlChart/>
                <Label>대시보드</Label>
            </Link>
            <Link to='setting/api'>
                <SlKey/>
                <Label>API Key</Label>
            </Link>
            <Link to='strategy'>
                <SlEqualizer/>
                <Label>전략 구독</Label>
            </Link>
            {
                !user.user?
                <Link to='auth/signin'>
                    <SlLock/>
                    <Label>로그인</Label>
                </Link>
                :
                <Button onClick={onClick}>
                    <SlLogout/>
                    <Label>로그아웃</Label>
                </Button>
            }
           
        </Menu>
    </Container>
}

const Container = styled.nav<{isShut : boolean}>`
    display: flex;
    flex-direction: column;
    width: 7rem;
    background-color: ${props => props.isShut? "none" : props.theme.light.whiteTransparent};
    position: fixed;
    left: 0;
    margin-left: 3rem;
    margin-top: 2rem;
    border-radius: 3rem;
    transition: background-color 0.2s ease-out;
    backface-visibility: hidden;
    box-shadow: ${props => props.isShut? "none" : "4px 4px 60px 6px rgba(0, 0, 0, 0.05)"};
    color: ${props => props.theme.light.darkGray};
    :hover{
        background-color: ${props => props.isShut? "none" : props.theme.light.white};
    }
    svg{
        width: 2.5rem;
        height: 2.5rem;
    }
`;
  
const Menu = styled.div<{isShut : boolean}>`
    /* display: ${props => props.isShut? "none" : "flex"}; */
    display: flex;
    transform: ${props => props.isShut? "scaleY(0)" : "scaleY(1)"};
    transform-origin: 0px 0px;
    transition: transform 0.1s ease-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding-bottom: 3rem;
    padding-top: 5rem;
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        width: 4.5rem;
        border-radius: 15px;
        padding: 1rem 1rem;
    }
`;

const ListIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
`;
const Label = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
`
const Button = styled.button`
    cursor: pointer;
`