import styled from "styled-components"
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import { SignUpFormValue } from "./authType";
import { AxiosError } from "axios";
import theme from "../../styles/theme";
import useSignIn from "./hooks/useSignIn";
import useSignUp from "./hooks/useSignUp";
import LongSumbitButton from "../common/LongSubmitButton";
export default function SignUp({signUpError, setSignUpError} : SignUpProps){
    const signInAsync = useSignIn();
    const signUpAsync = useSignUp();
    const { register, handleSubmit, formState: { errors }, trigger} = useForm<SignUpFormValue>({
        defaultValues:{ email: "", password: "", name:""}
    });
    const onSubmit : SubmitHandler<SignUpFormValue> = async (formInfo) =>{
       try{
            //signUp 및 signIn api 호출
            await signUpAsync(formInfo);
            const loginInfo = {
                email : formInfo.email,
                password : formInfo.password
            }
            await signInAsync(loginInfo);
            setSignUpError("");
       }
       catch(err){
            const error = err as AxiosError;
            setSignUpError(error.message);
       }
    }
    return <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>회원 가입</h1>
            <span> <Link to={'/auth/signin'} onClick={()=>setSignUpError("")}>로그인</Link></span>
            <Label>
                <label htmlFor="name">닉네임</label>
                <ErrorMessage
                    errors={errors}
                    name={"name"}
                    render={({ message }) => <Error>{message}</Error>}
                />
            </Label>
            <Input
                maxLength={15}
                style={{
                    borderColor: errors.name? theme.light.pink : theme.light.formGray
                }} 
                {...register("name", 
                    {   required: "닉네임을 입력해주세요.", 
                        maxLength: {
                            message: "최소 3글자, 최대 15글자의 영문 혹은 숫자입니다.",
                            value: 15
                        },
                        minLength: {
                            message: "최소 3글자, 최대 15글자의 영문 혹은 숫자입니다.",
                            value: 3
                        },
                        pattern: {
                            message: "최소 3글자, 최대 15글자의 영문 혹은 숫자입니다.",
                            value: /^[a-z]+[a-z0-9]/,
                        },
                        onChange: (e) => { 
                            if(e.target.value.length > 0) trigger("name");
                        }
                    })
                } id="name"></Input>
            <Label>
                <label htmlFor="email">이메일</label>
                <ErrorMessage
                    errors={errors}
                    name={"email"}
                    render={({ message }) => <Error>{message}</Error>}
                />
            </Label>
            <Input
                maxLength={45}
                style={{
                    borderColor: errors.email? theme.light.pink : theme.light.formGray
                }} 
                {...register("email", 
                    {   required: "이메일을 입력해주세요.", 
                        minLength: {
                            message: "최소 5글자 이상 입력해주세요.",
                            value: 5
                        },
                        pattern: {
                            message: "이메일 형식에 맞추어 작성해주세요.",
                            value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        },
                        onChange: (e) => { 
                            if(e.target.value.length > 0) trigger("email");
                        }
                    })
                } id="email"></Input>
            <Label>
                <label htmlFor="password">비밀번호</label>
                <ErrorMessage
                    errors={errors}
                    name={"password"}
                    render={({ message }) => <Error>{message}</Error>}
                />
            </Label>
            <Input
                maxLength={25}
                style={{
                    borderColor: errors.password? theme.light.pink : theme.light.formGray
                }} 
                {...register("password", 
                    {   required: "비밀번호를 입력해주세요.",
                        minLength: {
                            message : "최소 8글자, 최대 25글자 입니다.",
                            value : 8,
                        },
                        maxLength: {
                            message: "최소 8글자, 최대 25글자 입니다.",    
                            value : 25,
                        },
                        pattern: {
                            message: "숫자와 영문, 특수문자의 조합으로 작성해주세요.",
                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/
                        },
                        onChange: (e) => { 
                            if(e.target.value.length > 0) trigger("password");
                        }
                    })
                }id="password" type="password"></Input>
            <LongSumbitButton title="회원가입"/>
        </Form>
    </Wrapper>

}
interface SignUpProps {
    signUpError : string,
    setSignUpError : React.Dispatch<React.SetStateAction<string>>,
}
const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2);
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 350px;
    height: 500px;
    background-color: ${props => props.theme.light.white};
    padding: 20px 40px;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.light.borderGray};
    & a, > span{
        color: ${props => props.theme.light.lightBlue};
        &:hover{
        color: ${props => props.theme.light.darkBlue};
        }
        font-size: 13px;
        text-align: right;
    }
    h1{
        font-size: 28px;
        color: black;
        padding-bottom: 20px;
        text-align: center;
    }
`
const Input = styled.input`
    border-radius: 5px;
    padding: 8px 15px;
    border: 1px solid;
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
const Error = styled.span`
    color: ${props => props.theme.light.red};
    font-size: 11px;
`