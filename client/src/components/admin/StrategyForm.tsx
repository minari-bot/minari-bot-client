import styled from "styled-components"
import { EXCHANGE } from "../../global/type"
import { SubmitHandler, useForm } from "react-hook-form";
import { SlInfo } from "react-icons/sl"
import binanceLogo from "../../assets/img/binance_logo.svg.png"
import upbitLogo from "../../assets/img/upbit_logo.png"
import { ErrorMessage } from "@hookform/error-message";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../atoms/toast";
import { MUTATE_SUCCESS_MESSAGE } from "../../react-query/constants";
import { CustomErrorClass } from "../../global/error";
import LongSumbitButton from "../common/LongSubmitButton";
import { useUser } from "../../hooks/useUser";
import { useAllAlertStrategy } from "./hooks/useAllAlertStrategy";
import { StrategyformInfo, admin } from "../../apis/admin";
import { ReactComponent as ArrowBack } from "../../assets/svg/arrow_back.svg";
import { rightSideUIState } from "../../screens/AdminStrategy";

interface Props{
    exchange : string,
    setRightSideUIMode: React.Dispatch<React.SetStateAction<string>>
}
export default function StrategyForm({exchange, setRightSideUIMode} : Props){
    const {user} = useUser();
    const { mutateAsync : createStrategyMutateAsync } = useMutation(admin.createAlertStrategy);
    const { register, handleSubmit, formState: { errors } } = useForm<StrategyformInfo>({
        defaultValues:{ strategyName: "", exchange : exchange.toUpperCase(), symbol: "", strategyUrl: "", leverage: "" }
    });
    const {refetch} = useAllAlertStrategy();
    const setToast = useToast();
    const onSubmit : SubmitHandler<StrategyformInfo> = async (formInfo : StrategyformInfo) =>{
        try{
            formInfo.exchange = exchange;
            await createStrategyMutateAsync({user, formInfo});
            await refetch();
            setToast({state : "success", text: MUTATE_SUCCESS_MESSAGE.CREATE_API_KEY})
        }catch(err : unknown){
            const error = err as CustomErrorClass;
            setToast({state : "error", text: error.message})
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
                <Title>전략 등록</Title> 
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
                    name={"strategyName"}
                    render={({ message }) => <Error>{message}</Error>}
                    />
                </Label>
                <Input
                    maxLength={25}
                    {...register("strategyName",{
                        required: "전략 이름을 입력해주세요.",
                        minLength: {
                            message: "최소 3글자 이상 입력해주세요.",
                            value: 3,
                        },
                        pattern: {
                            message: "한글 / 영문 / 숫자만 입력 가능합니다.",
                            value: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/
                        }
                    })}
                />
                <Label>
                    <label htmlFor="symbol">
                        심볼*
                    </label>
                    <ErrorMessage
                    errors={errors}
                    name={"symbol"}
                    render={({ message }) => <Error>{message}</Error>}
                    />
                </Label>
                <Input
                    maxLength={20}
                    {...register("symbol",{
                        required: "심볼을 입력해주세요.",
                        pattern: {
                            message: "대문자 / 대문자 형식을 지켜주세요 (ex.ETH/USDT)",
                            value: /[A-Z]\/[A-Z]/
                        }
                    })}

                />
                <Label>
                    <label htmlFor="leverage">
                        레버리지*
                    </label>
                    <ErrorMessage
                    errors={errors}
                    name={"leverage"}
                    render={({ message }) => <Error>{message}</Error>}
                    />
                </Label>
                <Input
                    type="number"
                    maxLength={5}
                    {...register("leverage",{
                        required: "레버리지를 입력해주세요.",
                        pattern: {
                            message: "숫자만 입력 가능합니다.",
                            value: /[0-9]/
                        }
                    })}

                />
                <Label>
                    <label htmlFor="strategyUrl">
                        트레이딩 뷰 URL*
                    </label>
                    <ErrorMessage
                    errors={errors}
                    name={"strategyUrl"}
                    render={({ message }) => <Error>{message}</Error>}
                    />
                </Label>
                <Input 
                    maxLength={100}
                    {...register("strategyUrl",{
                        required: "트레이딩 뷰 URL을 입력해주세요.",
                        pattern: {
                            message: "URL(https / http / www )형식을 지켜주세요",
                            value: /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
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
    width: 100%;
    box-sizing: border-box;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
