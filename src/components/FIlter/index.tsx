import "./styles.css";

export default function Filter() {
    return (
        <main className="container mt20">
            <div className="filter-main">
                <form className="filter-form">
                    <div className="filter-input mb20">
                        <input type="text" placeholder="Preço minimo" />
                    </div>
                    <div className="filter-input mb20">
                        <input type="text" placeholder="Preço máximo" />
                    </div>
                    <button className="filter-btn">Filtrar</button>
                </form>
            </div>
        </main>
    );
}