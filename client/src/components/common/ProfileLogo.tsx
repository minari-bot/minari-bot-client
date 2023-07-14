import styled from "styled-components"
import defaultUserImg from '../../assets/defaultUser.svg'
interface Props{
    img : string
}
export default function ProfileLogo({img} : Props){
    return <Wrapper>
        <img src={img === ""? defaultUserImg : img} alt="profile-img"/>
    </Wrapper>
}
const Wrapper = styled.div`
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 9999px;
    img{
        width: 3.75rem;
        height: 3.75rem;
    }
`
