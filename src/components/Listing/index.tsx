import CardList from "../CardList";
import "./styles.css";

export default function Listing() {
    return (
        <main className="container mt20">
            <div className="listing-card">
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </div>
        </main>
    );
}