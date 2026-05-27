import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";
import {TIME_INTERVAL_CAROUSEL,MAX_CAROUSEL_PRODUCTS,ROUTES,} from "../../constants";
import "../../css/carouselProducts.css";
import { getProducts } from "../../data/products";
import { getRandomProducts } from "../../utils/getRandomProducts";

function CarouselProducts() {
    const [carouselProducts, setCarouselProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getProducts()
        .then((response) => {
            const randomProducts = getRandomProducts(
            response,
            MAX_CAROUSEL_PRODUCTS
            );

            setCarouselProducts(randomProducts);
        })
        .catch((error) => {
            console.error(error);
            setCarouselProducts([]);
        });
    }, []);

    const goToNextSlide = () => {
        setCurrentIndex(
        (prevIndex) =>
            (prevIndex + 1) % carouselProducts.length
        );
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0
            ? carouselProducts.length - 1
            : prevIndex - 1
        );
    };

    useEffect(() => {
        if (carouselProducts.length === 0) return;

        const interval = setInterval(() => {
        goToNextSlide();
        }, TIME_INTERVAL_CAROUSEL);

        return () => clearInterval(interval);
    }, [carouselProducts]);

    if (carouselProducts.length === 0) {
        return null;
    }

    return (
        <section className="carousel">
        <button
            className="carousel-control carousel-control-left"
            onClick={goToPreviousSlide}
            aria-label="Producto anterior"
        >
            <ChevronLeft size={34} />
        </button>

        <div
            className="carousel-track"
            style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            }}
        >
            {carouselProducts.map((product) => (
            <Link
                to={`${ROUTES.ITEM_DETAIL}/${product.id}`}
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

        <button
            className="carousel-control carousel-control-right"
            onClick={goToNextSlide}
            aria-label="Producto siguiente"
        >
            <ChevronRight size={34} />
        </button>

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