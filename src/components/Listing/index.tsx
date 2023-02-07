import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import CardList from "../CardList";
import "./styles.css";
import * as productService from "../../services/product-services"


export default function Listing() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        productService.findByPrice(0,200000);
        setProducts(products);
    }, [products]);

    return (
        <main className="container mt20">
            <div className="listing-card">
                {
                    products.map(product => <CardList key={product.id} product={product}/>)
                }
            </div>
        </main>
    );
}