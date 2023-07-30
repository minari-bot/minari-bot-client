import styled from "styled-components"
import { Link } from "react-router-dom";
import { SlHome, SlChart, SlKey, SlLock, SlMenu, SlEqualizer, SlLogout } from "react-icons/sl";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import useSignOut from "../auth/hooks/useSignOut";
export default function Navigation() {
    const [isShut, setShut] = useState(false);
    const signOutAsync = useSignOut();
    const user = useUser();
    const shutNavigation = () =>{
        setShut(prev => !prev);
    }
    const onClick = async () => {
        await signOutAsync();
    }
    return <Container isShut={isShut}>
        <ListIcon onClick={shutNavigation}>
            <SlMenu/>
        </ListIcon>
        <Menu isShut={isShut}>
            <Link to='/'>
                <SlHome/>
            </Link>
            <Link to='dashboard'>
                <SlChart/>
            </Link>
            <Link to='setting/api'>
                <SlKey/>
            </Link>
            <Link to='strategy'>
                <SlEqualizer/>
            </Link>
            {
                !user.user?
                <Link to='auth/signin'>
                    <SlLock/>
                </Link>
                :
                <Button onClick={onClick}>
                    <SlLogout/>
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
    :hover{
        background-color: ${props => props.isShut? "none" : props.theme.light.white};
    }
    svg{
        width: 3rem;
        height: 3rem;
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
    gap: 6rem;
    padding-bottom: 3rem;
    padding-top: 5rem;
`;

const ListIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
`;
const Button = styled.button`
    cursor: pointer;
`