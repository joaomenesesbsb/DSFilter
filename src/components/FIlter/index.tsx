import { useContext, useState } from "react";
import { ContextMaxPrice } from "../../utils/context-max-price";
import { ContextMinPrice } from "../../utils/context-min-price";
import { ContextQuantityProducts } from "../../utils/context-quantity-products";
import "./styles.css";

type FormData = {
    minPrice?: number;
    maxPrice?: number;
}

export default function Filter() {

    const [formData, setFormData] = useState<FormData>({});

    const {setContextMaxPrice} = useContext(ContextMaxPrice);

    const {setContextMinPrice} = useContext(ContextMinPrice);

    function handlePriceChange(e: any) {
        const name = e.target.name;
        const value = e.target.value
        setFormData({ ...formData, [name] : value });
    }

    function handleSubimit(e: any){
        e.preventDefault();
        setContextMinPrice(formData.minPrice || 0);
        setContextMaxPrice(formData.maxPrice || Number.MAX_VALUE);

        console.log(formData);
    }

    return (
        <main className="container mt20">
            <div className="filter-main">
                <form 
                    onSubmit={handleSubimit}
                    className="filter-form">
                    <div className="filter-input mb20">
                        <input
                            name="minPrice"
                            value={formData.minPrice || ""}
                            type="text"
                            placeholder="Preço minimo"
                            onChange={handlePriceChange} />
                    </div>
                    <div className="filter-input mb20">
                        <input
                            name="maxPrice"
                            value={formData.maxPrice || ""}
                            type="text"
                            placeholder="Preço máximo"
                            onChange={handlePriceChange} />
                    </div>
                    <button className="filter-btn">Filtrar</button>
                </form>
            </div>
        </main>
    );
}