import { atom, useRecoilState } from "recoil";

export interface Toast{
    state : 'none' | 'error' | 'success',
    text: string,
}
export const toastState = atom<Toast>({
    key: 'toastState',
    default: {
        state : 'none',
        text : "",
    },
})
export const useToast = () => {
    const [toast, setter] = useRecoilState(toastState);
    const setToast = ({state, text} : Toast) => {
        setter((prev) => ({ ...prev, state, text }))
    }
    return setToast;
}