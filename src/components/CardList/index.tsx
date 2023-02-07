import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props ={
    product: ProductDTO
}

export default function CardList({product}: Props) {
    return (
        <main className="card">
                <p>{product.name}</p>
                <h2>R$ {(product.price).toFixed(2)}</h2>
        </main>
    );
}