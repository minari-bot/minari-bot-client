import styled from "styled-components"
import { SlCheck, SlClose } from "react-icons/sl";
import { useRecoilState } from "recoil";
import { toastState } from "../../atoms/toast";
import { useRef } from "react";


export default function Toasts(){
    const [ toast, setToast ] = useRecoilState(toastState);
    const toastTimer = useRef<NodeJS.Timeout>();
    const onClose = () => {
        setToast( prev => ({
            ...prev,
            text : "",
            state : "none"
        }));
    }
    if (toastTimer.current) {
        clearTimeout(toastTimer.current);
    }
    const timer = setTimeout(() => {
        onClose();
      }, 4500);
      toastTimer.current = timer;

    if(toast.state === 'success') 
        return <Container>
                    <SlCheck/>
                    <Texts>
                        {toast.text}
                    </Texts>
                </Container>
    if(toast.state === 'error') 
        return <ErrorContainer>
                    <SlClose/>
                    <Texts>
                        Error: {toast.text}
                    </Texts>
                </ErrorContainer>
        return null;
}
const Container = styled.div`
    position: fixed;
    bottom: 4.5rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width : 25rem;
    height: 7.5rem;
    border-radius: 1.5rem;
    background: ${props => props.theme.light.white};
    border-left: 0.75rem solid ${props => props.theme.light.green};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 10px;
    padding: 0rem 2.5rem;
    svg{
        font-size: 2.5rem;

    }
    z-index: 9999;
`;
const ErrorContainer = styled(Container)`
        border-left-color: ${props => props.theme.light.pink};

`
const Texts = styled.div`
    position: relative;
    word-wrap:break-word;
    margin: 0 auto;
    left: 0;
    right: 0;
    color: ${props => props.theme.light.black};
    font-size: 1.2rem;
`