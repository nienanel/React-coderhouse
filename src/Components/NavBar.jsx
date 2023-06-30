import React from "react";

export default function NavBar() {
    function ShoppingCartIcon({ itemCount }) {
        return (
            <div>
                <i className="material-icons">shopping_cart</i>
                {itemCount > 0 && <span className="item-count">{itemCount}</span>}
            </div>
        );
    }

    const itemCount = 4; // Número de items dinámico

    return (
        <nav>
            <a href="/" className="site-title">K2</a>
            <ul>
                <li> <a href="/Skies">Skies</a></li>
                <li> <a href="/Snowboard">Snowboard</a></li>
                <li> <a href="/Ropa">Ropa</a></li>
                <li> <a href="/Team">Team</a></li>
                <li> <a href="/Contct">Contact</a></li>
                <ShoppingCartIcon itemCount={itemCount} />

            </ul>
        </nav>
    );
}