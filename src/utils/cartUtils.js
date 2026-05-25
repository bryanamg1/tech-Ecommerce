export const addItemToCart = (cart, item, qty) => {
    const productExists = cart.some((prod) => prod.id === item.id);

    if (productExists) {
        return cart.map((prod) => {
        if (prod.id === item.id) {
            return {
            ...prod,
            quantity: prod.quantity + qty,
            };
        }

        return prod;
        });
    }

    return [
        ...cart,
        {
        ...item,
        quantity: qty,
        },
    ];
};

export const removeItemFromCart = (cart, id) => {
    return cart.filter((prod) => prod.id !== id);
};

export const incrementCartItem = (cart, id) => {
    return cart.map((prod) => {
        if (prod.id === id) {
        if (prod.quantity >= prod.stock) {
            return prod;
        }

        return {
            ...prod,
            quantity: prod.quantity + 1,
        };
        }

        return prod;
    });
};

export const decrementCartItem = (cart, id) => {
    return cart.map((prod) => {
        if (prod.id === id) {
        if (prod.quantity <= 1) {
            return prod;
        }

        return {
            ...prod,
            quantity: prod.quantity - 1,
        };
        }

        return prod;
    });
};

export const checkIsInCart = (cart, id) => {
    return cart.some((prod) => prod.id === id);
};

export const calculateTotal = (cart) => {
    return cart.reduce(
        (acc, prod) => acc + prod.quantity * prod.price,
        0
    );
};

export const calculateTotalItems = (cart) => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
};