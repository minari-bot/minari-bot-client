import styled from "styled-components"
import { Link, useMatch, useNavigate} from "react-router-dom";
import logo from '../assets/img/logo.png'
import BorderLine from "./BorderLine";
import { SelectedLine } from "./SelectedLine";
import { auth } from "../../apis/auth";
import { useMutation} from "react-query";
import { clearStoredUser, useUser } from "../../hooks/useUser";
export default function Header () {
    const homeRouteMatch = useMatch("/");
    const dashboardRouteMatch = useMatch("/dashboard/*");
    const signInRouteMatch = useMatch("/auth/signin");
    const signUpRouteMatch = useMatch("/auth/signup");
    const user = useUser();
    const { mutate : signOutMutate} = useMutation(auth.signOut, {
        onSuccess: () => {
            user.clearUser();
            clearStoredUser();
        },
        onError: (err) => {
            console.log(err);
        }
    });
    return <Wrapper>
        <Nav>
            <Col>
                <Link to=''>
                    <Logo ></Logo>
                </Link>
                <Items>
                    <Item><Link to=''><SelectedLine here={homeRouteMatch? true : false}>홈</SelectedLine></Link></Item>
                    <Item><Link to='dashboard'><SelectedLine here={dashboardRouteMatch? true : false}>대시보드</SelectedLine></Link></Item>
                </Items>
            </Col>
            <Col>
                <Items>
                    {
                        user.user? <Item><Link  to="/" onClick={() => signOutMutate()}><SelectedLine here={false}>로그아웃</SelectedLine></Link></Item>
                        : <>
                            <Item><Link to='auth/signin'><SelectedLine here={signInRouteMatch? true : false}>로그인</SelectedLine></Link></Item>
                            <Item><Link to='auth/signup'><SelectedLine here={signUpRouteMatch? true : false}>회원가입</SelectedLine></Link></Item>
                        </>
                    
                    }
                </Items>
            </Col>
        <BorderLine/>
        </Nav>
    </Wrapper>
}
const Wrapper =styled.div`
    height: 50px;
`
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    color: ${props => props.theme.light.black};
    font-size: 13px;
    background-color: ${props => props.theme.light.white};
`
const Logo = styled.img`
    background-position: center center;
`
const Col = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 57px;
    padding-right: 57px;
    gap: 10px;
`
const Items = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    list-style: none;
`
const Item = styled.li `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
`;