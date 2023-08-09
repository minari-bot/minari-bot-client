import { atom } from "recoil";

export const selectedStrategy = atom({
    key: 'selectedStrategy',
    default: {
        label : "",
        symbol: "",
        leverage: 0,
        url: "",
        id: "",
        exchange: "",
    },
})