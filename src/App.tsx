import { useState } from "react"
import ListingBody from "./routes/ListingBody"
import { ContextMaxPrice } from "./utils/context-max-price"
import { ContextMinPrice } from "./utils/context-min-price";
import { ContextQuantityProducts } from "./utils/context-quantity-products";

function App() {

  const [contextMaxPrice, setContextMaxPrice] = useState<number>(0);

  const [contextMinPrice, setContextMinPrice] = useState<number>(0);

  const [contextQuantityProducts, setContextQuantityProducts] = useState<number>(0);

  return (
    <>
      <ContextQuantityProducts.Provider value={{ contextQuantityProducts, setContextQuantityProducts }} >
        <ContextMaxPrice.Provider value={{ contextMaxPrice, setContextMaxPrice }} >
          <ContextMinPrice.Provider value={{ contextMinPrice, setContextMinPrice }} >
            <ListingBody />
          </ContextMinPrice.Provider>
        </ContextMaxPrice.Provider>
      </ContextQuantityProducts.Provider>
    </>
  )
}

export default App
