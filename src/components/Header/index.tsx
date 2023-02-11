import { useContext } from "react";
import { ContextQuantityProducts } from "../../utils/context-quantity-products";
import "./styles.css";

export default function Header() {

    const {contextQuantityProducts} = useContext(ContextQuantityProducts);

    return (
        <header>
            <nav className="nav-main container">
                <h1>DSFilter</h1>
                <div className="nav-rigth">
                    <p>{contextQuantityProducts} pedido(s)</p>
                </div>
            </nav>
        </header>
    );
}