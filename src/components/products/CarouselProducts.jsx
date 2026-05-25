import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {formatPrice} from "../../utils/formatPrice"
import {TIME_INTERVAL_CAROUSEL, MAX_CAROUSEL_PRODUCTS} from "../../constants/index"

import "../../css/carouselProducts.css";

import { products } from "../../data/products";
import { getRandomProducts } from "../../utils/getRandomProducts";

function CarouselProducts() {
    const [carouselProducts, setCarouselProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const randomProducts = getRandomProducts(products, MAX_CAROUSEL_PRODUCTS);

        setCarouselProducts(randomProducts);
    }, []);

    // Auto slide
    useEffect(() => {
        if (carouselProducts.length === 0) return;

        const interval = setInterval(() => {
        setCurrentIndex(
            (prevIndex) =>
            (prevIndex + 1) % carouselProducts.length
        );
        }, TIME_INTERVAL_CAROUSEL);

        return () => clearInterval(interval);
    }, [carouselProducts]);

    if (carouselProducts.length === 0) {
        return null;
    }

    return (
        <section className="carousel">
        <div
            className="carousel-track"
            style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            }}
        >
            {carouselProducts.map((product) => (
            <Link
                to={`/item/${product.id}`}
                className="carousel-slide"
                key={product.id}
            >
                <img
                src={product.image}
                alt={product.name}
                className="carousel-image"
                />

                <div className="carousel-overlay"></div>

                <div className="carousel-info">
                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <span>${formatPrice(product.price)}</span>
                </div>
            </Link>
            ))}
        </div>

        <div className="carousel-dots">
            {carouselProducts.map((_, index) => (
            <button
                key={index}
                className={`dot ${
                currentIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
            />
            ))}
        </div>
        </section>
    );
}

export default CarouselProducts;