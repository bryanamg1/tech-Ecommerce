import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {ChevronDown,ChevronUp,} from "lucide-react";
import CartWidget from "../cart/CartWidget";
import "../../css/navbar.css";
import { getCategoriesWithBrands } from "../../data/products";
import { ROUTES } from "../../constants";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    const [openDropdown, setOpenDropdown] =
        useState(null);

    useEffect(() => {
        getCategoriesWithBrands()
        .then((response) => {
            setCategories(response);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const toggleDropdown = (categoryName) => {
        if (openDropdown === categoryName) {
        setOpenDropdown(null);
        } else {
        setOpenDropdown(categoryName);
        }
    };

    return (
        <nav className="navbar">
        <Link
            to={ROUTES.HOME}
            className="navbar-brand"
        >
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

            <rect
                x="28"
                y="42"
                width="8"
                height="8"
                fill="currentColor"
            />

            <rect
                x="20"
                y="50"
                width="24"
                height="5"
                rx="2"
                fill="currentColor"
            />
            </svg>

            <span className="brand-name">
            TechStore
            </span>
        </Link>

        <ul className="navbar-links">
            {categories.map((category) => {
            const isOpen =
                openDropdown === category.name;

            return (
                <li
                className="navbar-item"
                key={category.name}
                >
                <div className="navbar-category">
                    <Link
                    to={category.path}
                    className="navbar-link"
                    >
                    {category.name}
                    </Link>

                    <button
                    className="dropdown-toggle"
                    onClick={() =>
                        toggleDropdown(
                        category.name
                        )
                    }
                    >
                    {isOpen ? (
                        <ChevronUp size={16} />
                    ) : (
                        <ChevronDown size={16} />
                    )}
                    </button>
                </div>

                <ul
                    className={`dropdown-menu ${
                    isOpen
                        ? "dropdown-open"
                        : ""
                    }`}
                >
                    {category.brands.map(
                    (brand) => (
                        <li key={brand}>
                        <Link
                            to={`${ROUTES.CATEGORY}/${category.name}/${brand}`}
                        >
                            {brand}
                        </Link>
                        </li>
                    )
                    )}
                </ul>
                </li>
            );
            })}
        </ul>

        <CartWidget />
        </nav>
    );
};

export default NavBar;