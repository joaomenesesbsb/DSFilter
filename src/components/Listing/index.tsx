import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import CardList from "../CardList";
import "./styles.css";
import * as productService from "../../services/product-services"
import { ContextMaxPrice } from "../../utils/context-max-price";
import { ContextMinPrice } from "../../utils/context-min-price";
import { ContextQuantityProducts } from "../../utils/context-quantity-products";


export default function Listing() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const { contextMaxPrice } = useContext(ContextMaxPrice);

    const { contextMinPrice } = useContext(ContextMinPrice);

    const { contextQuantityProducts, setContextQuantityProducts } = useContext(ContextQuantityProducts);

    useEffect(() => {
        setProducts(productService.findByPrice(contextMinPrice, contextMaxPrice));
        setContextQuantityProducts(products.length);
    }, [products]);

    return (
        <main className="container mt20">
            <div className="listing-card">
                {
                    products.map(product => <CardList key={product.id} product={product} />)
                }
            </div>
        </main>
    );
}