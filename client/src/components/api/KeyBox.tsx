import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from "@tanstack/react-query";
import { apiKey } from "../../apis/apiKey";
import { toastState } from "../../atoms/toast";
import { useSetRecoilState } from "recoil";
import { MUTATE_SUCCESS_MESSAGE } from "../../react-query/constants";
import styled from "styled-components";
import { apiKeyInfo, apiKeyInfoList } from "./apiType";
import { TfiClose } from "react-icons/tfi";
import { useKeyInfo } from "./hooks/useKeyInfo";
interface Props{
    keyInfo : apiKeyInfo,
    refetch : <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<apiKeyInfoList, unknown>>,
    selectedIndex: number | null,
    onClickKey: (e: React.MouseEvent<HTMLDivElement>) => void
    index: number,
}
export default function KeyBox({keyInfo, refetch, selectedIndex, onClickKey, index} : Props){
    const { mutateAsync } = useMutation(apiKey.deleteApiKey);
    const setToast = useSetRecoilState(toastState);
    const info = useKeyInfo(keyInfo._id);
    const onDelete = async (id : string) => {
        await mutateAsync(id);
        setToast(prev => ({
            ...prev,
            text: MUTATE_SUCCESS_MESSAGE.DELETE_API_KEY,
            state: 'success',
            isOpen: true,
        }))
        refetch();
    }
    return <InfoBox  isSelect={index === selectedIndex} onClick={onClickKey} data-index={index} data-label={keyInfo.label} id={keyInfo._id}>
                {info?.connect? <GreenDot/> : <RedDot/>}
                <TitleLabel>{keyInfo.label}</TitleLabel>
                <Contents>
                    <ListLabel>
                    <div>API Key</div>
                    <div>Secret Key</div>
                    </ListLabel>
                    <Info>
                        <div>{keyInfo.apikey}</div>
                        <div>{"*".repeat(50)}</div>
                    </Info> 
                    <DeleteButton onClick={() => onDelete(keyInfo._id)}><TfiClose/></DeleteButton>
                </Contents>
            </InfoBox>
}
const InfoBox = styled.div<{isSelect : boolean}>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    width: 100%;
    padding: 2rem 2.5rem;
    background-color: ${props => props.theme.light.white};
    border-radius: 15px;
    font-size: 1.2rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    box-shadow: ${props => props.isSelect? `inset 0px 0px 0px 1.5px ${props.theme.light.green}`: "0px 2px 10px rgba(0, 0, 0, 0.05)"};
    &:hover{
        background: ${props => props.isSelect? props.theme.light.white : props.theme.light.borderGray};
    }
`
const TitleLabel = styled.h2`
    font-size: 1.5rem;
    text-align: left;
`
const Contents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
`

const ListLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-right: 1rem;
    border-right:  0.5px solid ${props => props.theme.light.borderGray};
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    font-size: 0.9rem;
`
const DeleteButton = styled.button`
    position: absolute;
    right: 1.0rem;
    top: 1.0rem;
    font-size: 1.0rem;
    cursor: pointer;
`
const GreenDot = styled.div`
    position: absolute;
    left: 1.0rem;
    top: 1.0rem;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: ${props => props.theme.light.linearGreen};
`
const RedDot = styled(GreenDot)`
    background: ${props => props.theme.light.pink};
`