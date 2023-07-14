import styled from "styled-components"
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInFormValue } from "./authType";
import { useMutation } from "react-query";
import { auth } from "../../apis/auth";
import { AxiosError } from "axios";
import { useUser } from "../../hooks/useUser";
import theme from "../../styles/theme";


function SignIn({signInError, setSignInError} : SignInProps){
    const navigate = useNavigate();
    const { mutateAsync, isLoading, isError, error } = useMutation(auth.signIn);
    const user = useUser();
    const { register, handleSubmit, formState: { errors }, trigger} = useForm<SignInFormValue>({
        defaultValues:{ email: "", password: "" }
    });
    
    const onSubmit : SubmitHandler<SignInFormValue> = async (formInfo) =>{
        try{
            const info = await mutateAsync(formInfo);
            user.updateUser({
                email : info.email,
                name : info.name,
            })
            setSignInError("");
            navigate('/dashboard');
        }catch(err){
            const error = err as AxiosError;
            setSignInError(error.message);
        }
     }
    return <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>로그인 🤖</h1>
            <span><Link to={'/auth/signup'}>계정 생성 하기</Link></span>
            <Text>
                <label htmlFor="email">이메일</label>
                <ErrorMessage
                    errors={errors}
                    name={"email"}
                    render={({ message }) => <Error>{message}</Error>}
                />
            </Text>
            <Input
                maxLength={45}
                style={{
                    borderColor: errors.email? theme.light.pink : theme.light.formGray
                }} 
                {...register("email", 
                    {   
                        required: "이메일을 입력해주세요.", 
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
            <Text>
                <label htmlFor="password">비밀번호</label>
                <ErrorMessage
                    errors={errors}
                    name={"password"}
                    render={({ message }) => <Error>{message}</Error>}
                />
            </Text>
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
            <Button type="submit">로그인</Button>
            <Info>
                <span>아이디 찾기</span>
                <span>비밀번호 찾기</span>
            </Info>
        </Form>
    </Wrapper>

}
interface SignInProps {
    signInError : string,
    setSignInError : React.Dispatch<React.SetStateAction<string>>,
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
    width: 35rem;
    height: 50rem;
    background-color: ${props => props.theme.light.white};
    padding: 2rem 4rem;
    border-radius: 1rem;
    border: 1px solid ${props => props.theme.light.borderGray};
    & a, > span{
        color: ${props => props.theme.light.lightBlue};
        font-size: 1.3rem;
        text-align: right;
        &:hover{
        color: ${props => props.theme.light.darkBlue};
        }
    }
    h1{
        font-size: 2.8rem;
        color: ${props => props.theme.light.black};
        padding-bottom: 2rem;
        text-align: center;
    }
`
const Input = styled.input`
    border-radius: 5px;
    padding: 0.8rem 1.5rem;
    border: 1px solid;
`
const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`
const Error = styled.span`
    color: ${props => props.theme.light.red};
    font-size: 1.1rem;
`
const Button = styled.button`
    background-color: ${props => props.theme.light.lightBlue};
    color: ${props => props.theme.light.white};
    padding: 1rem 5rem;
    font-size: 1.2rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    width: 100%;
    &:hover{
        background-color: ${props => props.theme.light.darkBlue};
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: ${props => props.theme.light.black};
    font-size: 1.3rem;
    padding-top: 1rem;
`
export default SignIn;