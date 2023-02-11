import { createContext } from "react";


export type ContexQuantityProductsType = {
    contextQuantityProducts: number;
    setContextQuantityProducts: Function; 
}

export const ContextQuantityProducts = createContext<ContexQuantityProductsType>({
    contextQuantityProducts: 0,
    setContextQuantityProducts: () => {}
})