
//   CAROUSEL
export const TIME_INTERVAL_CAROUSEL = 5000;
export const MAX_CAROUSEL_PRODUCTS = 5;

// NOTIFICATIONS

export const NOTIFICATION_DURATION = 2000;

export const NOTIFICATIONS = {
    PRODUCT_ADDED: {
        type: "success",
        message: "Producto agregado al carrito",
    },

    PRODUCT_UPDATED: {
        type: "info",
        message: "Producto actualizado en el carrito",
    },

    PRODUCT_REMOVED: {
        type: "error",
        message: "Producto eliminado del carrito",
    },

    CART_CLEARED: {
        type: "error",
        message: "Carrito vaciado",
    },
};

// CART

export const DELETE_CONFIRMATION_DURATION = 3000;

// ROUTES

export const ROUTES = {
    HOME: "/",
    CART: "/cart",
    ITEM_DETAIL: "/item",
    CATEGORY: "/category",
    CHECKOUT: "/checkout"
};

// TEXTS

export const EMPTY_CART_TEXTS = {
    TITLE: "Tu carrito está vacío",
    DESCRIPTION: "Parece que todavía no agregaste productos.",
    ACTION: "Explorar productos",
    ICON: "🛒",
};

export const CART_VIEW_TEXTS = {
    TITLE: "Tu carrito",
    CLEAR_CART: "Vaciar carrito",
    TOTAL: "Total:",
    FINISH_PURCHASE: "Finalizar compra",
    CONTINUE_SHOPPING: "Seguir comprando",
    RESUMEN: "Resumen"
};

export const ITEM_TEXTS = {
    STOCK: "Stock disponible:",
    DETAIL_BUTTON: "Ver detalle",
};

export const ITEM_COUNT_TEXTS = {
    ADD_TO_CART: "Agregar al carrito",
};

export const ITEM_DETAIL_TEXTS = {
    STOCK: "Stock disponible:",
    CONTINUE_SHOPPING: "Seguir comprando",
    GO_TO_CART: "Ir al carrito",
};

export const ITEM_DETAIL_CONTAINER_TEXTS = {
    LOADING: "Cargando producto...",
    PRODUCT_NOT_FOUND: "Producto no encontrado",
};

export const ITEM_LIST_CONTAINER_TEXTS = {
    FEATURED_PRODUCTS: "Productos destacados",
    LOADING: "Cargando productos...",
    EMPTY_CATEGORY: "No hay productos disponibles para esta categoría.",
};

export const ERROR_TEXTS = {
    CODE: "404",
    TITLE: "Página no encontrada",
    DESCRIPTION: "La ruta que intentaste visitar no existe o fue movida.",
    BUTTON: "Volver al inicio",
};

export const LOADER_TEXTS = {
    DEFAULT: "Cargando...",
};

export const CHECKOUT_TEXTS = {
    TITLE: "Finalizar compra",
    NAME: "Nombre completo",
    EMAIL: "Email",
    PHONE: "Teléfono",
    SUBMIT: "Confirmar compra",
    SUMMARY: "Resumen de compra",
    SUCCESS_TITLE: "Compra realizada con éxito",
    SUCCESS_MESSAGE: "Tu número de orden es:",
    BACK_HOME: "Volver al inicio",
    REPEAT_EMAIL: "Repetir email"
};