import { createContext } from "react";


export type ContexMinPriceType = {
    contextMinPrice: number;
    setContextMinPrice: Function; 
}

export const ContextMinPrice = createContext<ContexMinPriceType>({
    contextMinPrice: 0,
    setContextMinPrice: () => {}
})