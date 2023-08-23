import styled from "styled-components"
import { Link, useLocation } from "react-router-dom";
import menuIcon from '../../assets/svg/menu.svg';
import dashboardIcon from '../../assets/svg/dashboard.svg';
import homeIcon from '../../assets/svg/home.svg';
import keyIcon from '../../assets/svg/key.svg';
import loginIcon from '../../assets/svg/login.svg';
import logoutIcon from '../../assets/svg/logout.svg';
import settingIcon from '../../assets/svg/settingFill.svg';
import strategyIcon from '../../assets/svg/strategy.svg';
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import useSignOut from "../auth/hooks/useSignOut";
import { useMediaQueries } from "../../hooks/useMediaQueries";
import { ReactComponent as Close } from "../../assets/svg/close.svg";

export default function Navigation() {
    const { isPc } = useMediaQueries();
    const [isShut, setShut] = useState(false);
    const signOutAsync = useSignOut();
    const { pathname } = useLocation();
    const {user} = useUser();
    const shutNavigation = () =>{
        setShut(prev => !prev);
    }
    const onClick = async () => {
        await signOutAsync();
    }
    useEffect(() => {
        setShut(prev => !prev);
    }, [isPc])
    useEffect(() => {
        if(!isPc) setShut(prev => !prev);
    },[pathname])
    return <Container isShut={isShut}>
        <CloseButton isShut={isShut} onClick={shutNavigation}>
            <Close/>
        </CloseButton>
        <ListIcon isShut={isShut} onClick={shutNavigation}>
            <Img src={menuIcon}/>
        </ListIcon>
        <Menu isShut={isShut}>
            <Link to='/'>
                <Img src={homeIcon}/>
                <Label>홈</Label>
            </Link>
            <Link to='dashboard'>
                <Img src={dashboardIcon}/>
                <Label>대시보드</Label>
            </Link>
            <Link to='setting/api'>
                <Img src={keyIcon}/>
                <Label>API Key</Label>
            </Link>
            <Link to='strategy'>
                <Img src={strategyIcon}/>
                <Label>전략 구독</Label>
            </Link>
            {
                user?.userType === 'ADMIN'
                &&
                <Link to='admin/strategy'>
                    <Img src={settingIcon}/>
                    <Label>전략 관리</Label>
                </Link>
            }
            {
                !user?
                <Link to='auth/signin'>
                    <Img src={loginIcon}/>
                    <Label>로그인</Label>
                </Link>
                :
                <a href='/' onClick={onClick}>
                        <Img src={logoutIcon}/>
                        <Label>로그아웃</Label>
                </a>
            }
        </Menu>
    </Container>
}

const Container = styled.nav<{isShut : boolean}>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 9rem;
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
    svg{
        width: 2.5rem;
        height: 2.5rem;
    }
    @media screen and (max-width: 1460px){
        width: 7rem;
    }
    @media screen and (max-width: 1024px){
        width: calc(100% - 6rem);
        justify-content: flex-start;
        align-items: flex-start;
        backdrop-filter: ${props => props.isShut? '': 'blur(35px)'};
        z-index: 10;
    }
`;
  
const Menu = styled.div<{isShut : boolean}>`
    display: ${props => props.isShut? "none" : "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    padding-top: 5rem;
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        /* padding */
        :last-child{
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            padding-bottom: 2.5rem;
        }
    }
    @media screen and (max-width: 1460px){
        gap: 4.5rem;
    }
    @media screen and (max-width: 1024px){
        width: 100%;
        gap: 0;
        a{
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 4rem;
            padding: 2rem 3.5rem;
            :last-child{
            }
            :hover{
                background-color: ${props => props.isShut? "none" : props.theme.light.borderGray};
            }
        }
    }
`;

const ListIcon = styled.div<{isShut: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    cursor: pointer;
    @media screen and (max-width: 1460px){
        img{
            width: 4rem;
            height: 4rem;
        }
    }
    @media screen and (max-width: 1024px){
        display: ${props => props.isShut? "block" : "none"};
        position: absolute;
        top: 0px;
        left: 0px;
        img{
            width: 4rem;
            height: 4rem;
        }
    }
    @media screen and (max-width: 767px){
        top: -40px;
        left: -10px;
    }
`;
const Label = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    @media screen and (max-width: 1460px){
        font-size: 1.1rem;
    }
    @media screen and (max-width: 1024px){
        font-size: 2.25rem;
        font-weight: bold;
        width: 100%;
        padding-right: 3.5rem;
    }
`
const Img = styled.img`
    width: 3.25rem;
    height: 3.25rem;
    @media screen and (max-width: 1460px){
        width: 2.5rem;
        height: 2.5rem;
    }
    @media screen and (max-width: 1024px){
        width: 4rem;
        height: 4rem;
    }
`
const CloseButton = styled.button<{isShut : boolean}>`
    display: none;
    position: absolute;
    right: 2rem;
    top: 1.75rem;
    cursor: pointer;
    z-index: 100;
    svg{
        width: 3.5rem;
        height: 3.5rem;
    }
    @media screen and (max-width: 1024px){
        display: ${props => props.isShut? "none" : "block"};
    }
`