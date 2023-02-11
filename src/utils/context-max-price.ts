import { createContext } from "react";


export type ContexMaxPriceType = {
    contextMaxPrice: number;
    setContextMaxPrice: Function; 
}

export const ContextMaxPrice = createContext<ContexMaxPriceType>({
    contextMaxPrice: Number.MAX_VALUE,
    setContextMaxPrice: () => {}
})