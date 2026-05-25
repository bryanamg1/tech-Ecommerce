import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import "../../css/navbar.css";
import {getCategoriesWithBrands } from "../../data/products"

const categories = getCategoriesWithBrands();

const NavBar = () => {
    return (
        <nav className="navbar">
        <Link to="/" className="navbar-brand">
            <svg
            className="navbar-logo"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo monitor"
            >
            <rect
                x="10"
                y="10"
                width="44"
                height="30"
                rx="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
            />
            <rect x="28" y="42" width="8" height="8" fill="currentColor" />
            <rect x="20" y="50" width="24" height="5" rx="2" fill="currentColor" />
            </svg>

            <span className="brand-name">TechStore</span>
        </Link>

        <ul className="navbar-links">
            {categories.map((category) => (
            <li className="navbar-item" key={category.name}>
                <Link to={category.path} className="navbar-link">
                {category.name}
                </Link>

                <ul className="dropdown-menu">
                {category.brands.map((brand) => (
                    <li key={brand}>
                    <Link to={`${category.path}/${brand}`}>
                        {brand}
                    </Link>
                    </li>
                ))}
                </ul>
            </li>
            ))}
        </ul>

        <CartWidget />
        </nav>
    );
};

export default NavBar;