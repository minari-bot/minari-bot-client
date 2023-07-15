import { atom } from "recoil";

export interface Toast{
    state : 'none' | 'error' | 'success',
    text: string,
    isOpen : boolean,
}
export const toastState = atom<Toast>({
    key: 'toastState',
    default: {
        state : 'none',
        text : "",
        isOpen : false,
    },
})