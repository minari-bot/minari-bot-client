import styled from "styled-components"
import defaultUserImg from '../../assets/defaultUser.svg'
interface Props{
    img : string
}
export default function ProfileLogo({img} : Props){
    return <Img src={img === ""? defaultUserImg : img} alt="profile-img"/>
}
const Img = styled.img`
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 9999px;
`
