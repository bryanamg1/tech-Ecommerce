export function getRandomProducts(products, quantity = 5) {
    const shuffled = [...products].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, quantity);
}