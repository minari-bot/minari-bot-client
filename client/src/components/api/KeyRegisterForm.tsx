import styled from "styled-components"
import { EXCHANGE } from "../../global/type"
import { SubmitHandler, useForm } from "react-hook-form";
import { apiKeyFormValue } from "./apiType";
import { apiKey } from "../../apis/apiKey";
import { SlInfo } from "react-icons/sl"
import binanceLogo from "../../assets/img/binance_logo.svg.png"
import upbitLogo from "../../assets/img/upbit_logo.png"
import { ErrorMessage } from "@hookform/error-message";
import { useMutation } from "@tanstack/react-query";
import useKeyList from "./hooks/useKeyList";
import { useToast } from "../../atoms/toast";
import { MUTATE_SUCCESS_MESSAGE } from "../../react-query/constants";
import { CustomErrorClass } from "../../global/error";
import LongSumbitButton from "../common/LongSubmitButton";
import { ReactComponent as ArrowBack } from "../../assets/svg/arrow_back.svg";
import { rightSideUIState } from "../../screens/Api";

interface Props{
    exchange : string
    setRightSideUIMode: React.Dispatch<React.SetStateAction<string>>
}
export default function KeyRegisterForm({exchange, setRightSideUIMode} : Props){
    const { mutateAsync : createApiMutateAsync } = useMutation(apiKey.createApiKey);
    const { mutateAsync : checkApiMutateAsync } = useMutation(apiKey.checkApiKey);
    const { register, handleSubmit, formState: { errors } } = useForm<apiKeyFormValue>({
        defaultValues:{ label: "", exchange, apikey: "", secretkey: "" }
    });
    const setToast = useToast();
    const { refetch } = useKeyList();
    const onSubmit : SubmitHandler<apiKeyFormValue> = async (formInfo : apiKeyFormValue) =>{
        try{
            const checkInfo = {exchange, apikey : formInfo.apikey, secretkey : formInfo.secretkey};
            formInfo = {...formInfo, exchange};
            await checkApiMutateAsync(checkInfo);
            await createApiMutateAsync(formInfo);
            await refetch();
            setToast({state : 'success', text: MUTATE_SUCCESS_MESSAGE.CREATE_API_KEY })
        }catch(err : unknown){
            const error = err as CustomErrorClass;
            setToast({state : 'error', text: error.message})
        }
    }
    const onClose = () => {
        setRightSideUIMode(rightSideUIState.none);
    }
    return <Container>
        <Header>
            <TitleWrapper>
                {exchange === EXCHANGE.binance && <img src={binanceLogo} alt="binance"/>}
                {exchange === EXCHANGE.upbit && <img src={upbitLogo} alt="upbit"/>}
                <Title>API Key 등록</Title> 
            </TitleWrapper>
            <CloseButton onClick={onClose}>
                <ArrowBack/>
            </CloseButton>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                    <label htmlFor="label">
                        Label* <SlInfo/>
                    </label>
                    <ErrorMessage
                    errors={errors}
                    name={"label"}
                    render={({ message }) => <Error>{message}</Error>}
                    />
                </Label>
                <Input
                    maxLength={25}
                    {...register("label",{
                        required: "Label을 입력해주세요.",
                        minLength: {
                            message: "최소 3글자 이상 입력해주세요.",
                            value: 3,
                        },
                        pattern: {
                            message: "영문과 숫자만 허용됩니다.",
                            value: /^[A-Za-z0-9]+$/
                        }
                    })}
                />
                <Label>
                    <label htmlFor="apikey">
                        API Key*
                    </label>
                    <ErrorMessage
                    errors={errors}
                    name={"apikey"}
                    render={({ message }) => <Error>{message}</Error>}
                    />
                </Label>
                <Input
                    type="password" 
                    maxLength={100}
                    {...register("apikey",{
                        required: "API Key를 입력해주세요.",
                        pattern: {
                            message: "영문과 숫자만 허용됩니다.",
                            value: /^[A-Za-z0-9]+$/
                        }
                    })}

                />
                <Label>
                    <label htmlFor="secretkey">
                        Secret Key*
                    </label>
                    <ErrorMessage
                    errors={errors}
                    name={"secretkey"}
                    render={({ message }) => <Error>{message}</Error>}
                    />
                </Label>
                <Input 
                    type="password" 
                    maxLength={100}
                    {...register("secretkey",{
                        required: "Secret Key를 입력해주세요.",
                        pattern: {
                            message: "영문과 숫자만 허용됩니다.",
                            value: /^[A-Za-z0-9]+$/
                        }
                    })}
                />
            <LongSumbitButton title="추가"/>
        </Form>
    </Container>
}
const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 6fr;
    border-radius: 1.5rem;
    background-color: ${props => props.theme.light.white};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;
    margin-top: 4.5rem;
    width: 100%;
    box-sizing: border-box;
    @media screen and (max-width: 1278px){
        margin-top: 0;
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 0.5px solid ${props => props.theme.light.borderGray};
    padding: 1rem 0;
    img{
        width: 2rem;
        height: 2rem;
    }
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.0rem;
`
const Title = styled.h2`
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;    
`

const Error = styled.span`
    color: ${props => props.theme.light.red};
    font-size: 1.1rem;
`
const Label = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`
const Input = styled.input.attrs({ autocomplete: 'off',})`
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.light.formGray};
    box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.02);
`
const CloseButton = styled.button`
    cursor: pointer;
    svg{
        width: 2.5rem;
        height: 2.5rem;
    }
    padding-top: 0.3rem;
`