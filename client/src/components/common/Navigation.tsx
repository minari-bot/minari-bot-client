import styled from "styled-components"
import { Link } from "react-router-dom";
import menuIcon from '../../assets/svg/menu.svg';
import dashboardIcon from '../../assets/svg/dashboard.svg';
import homeIcon from '../../assets/svg/home.svg';
import keyIcon from '../../assets/svg/key.svg';
import loginIcon from '../../assets/svg/login.svg';
import logoutIcon from '../../assets/svg/logout.svg';
import settingIcon from '../../assets/svg/settingFill.svg';
import strategyIcon from '../../assets/svg/strategy.svg';
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import useSignOut from "../auth/hooks/useSignOut";
export default function Navigation() {
    const [isShut, setShut] = useState(false);
    const signOutAsync = useSignOut();
    const {user} = useUser();
    const shutNavigation = () =>{
        setShut(prev => !prev);
    }
    const onClick = async () => {
        await signOutAsync();
    }
    return <Container isShut={isShut}>
        <ListIcon onClick={shutNavigation}>
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
                <Button onClick={onClick}>
                    <Img src={logoutIcon}/>
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
    gap: 3rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
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
const Img = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`