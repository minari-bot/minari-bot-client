import styled from "styled-components"
import { EXCHANGE, EXCHANGE_ENUM } from "../../global/type"
import { SubmitHandler, useForm } from "react-hook-form";
import { apiKeyFormValue } from "./apiType";
import { useState } from "react";
import { useMutation } from "react-query";
import { apiKey } from "../../apis/apiKey";
import { AxiosError } from "axios";
import { SlPlus, SlInfo } from "react-icons/sl"
import binanceLogo from "../../assets/img/binance_logo.svg.png"
import upbitLogo from "../../assets/img/upbit_logo.png"
import { ErrorMessage } from "@hookform/error-message";

interface Props{
    exchange : EXCHANGE
}
export default function KeyRegisterForm({exchange} : Props){
    const { mutateAsync : createApiMutateAsync, isLoading : createApiLoading, isError : isCreateApiError, error : createApiError } = useMutation(apiKey.createApiKey);
    const { mutateAsync : checkApiMutateAsync, isLoading : checkApiLoading, isError : isCheckApiError, error : checkApiError } = useMutation(apiKey.checkApiKey);
    const { register, handleSubmit, formState: { errors }, trigger} = useForm<apiKeyFormValue>({
        defaultValues:{ label: "", exchange, apikey: "", secretkey: "" }
    });
    const [readyInfo, setReadyInfo] = useState({
        label : false,
        apikey : false,
        secretkey: false,
    });
    const onSubmit : SubmitHandler<apiKeyFormValue> = async (formInfo) =>{
        try{
            formInfo = {...formInfo, exchange};
            const info = await createApiMutateAsync(formInfo);
        }catch(err){
            const error = err as AxiosError;
        }
     }
     const onCheckApi : SubmitHandler<apiKeyFormValue> = async (formInfo) => {
        try{
            console.log(formInfo);  
            const data = await checkApiMutateAsync(formInfo);
        } catch(err){
            const error = err as AxiosError;
            console.log(error);
        }
     }
    return <Container>
        <Head>
            {exchange === EXCHANGE_ENUM.binance && <img src={binanceLogo} alt="binance"/>}
            {exchange === EXCHANGE_ENUM.upbit && <img src={upbitLogo} alt="upbit"/>}
            <Title>API Key 등록</Title> 
            <SlInfo/>
        </Head>
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
            <Foot>
                <Button onClick={handleSubmit(onCheckApi)}>Key 체크</Button>
                <AddButton>추가</AddButton>
            </Foot>
        </Form>
    </Container>
}
const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 6fr;
    border-radius: 25px;
    background-color: ${props => props.theme.light.white};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;
    margin-top: 4.5rem;
    width: 100%;
    box-sizing: border-box;
`
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.0rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 0.5px solid ${props => props.theme.light.borderGray};
    padding-bottom: 1.0rem;
    img{
        width: 2rem;
        height: 2rem;
    }
`
const Title = styled.h2`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;
    
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
const Input = styled.input`
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.light.formGray};
    box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.02);
`
const Button = styled.button`
    border: 1px solid ${props => props.theme.light.formGray};
    border-radius: 8px;
    box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.02);
    padding: 0.75rem;
    font-size: 1.2rem;
    &:hover{
        background-color: ${props => props.theme.light.borderGray};
    }
`
const AddButton = styled(Button)`
    background-color: ${props => props.theme.light.lightBlue};
    color: ${props => props.theme.light.white};
    padding: 0.75rem;
    width: 6.5rem;
    &:hover{
        background-color: ${props => props.theme.light.darkBlue};
    }
`
const Foot = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`