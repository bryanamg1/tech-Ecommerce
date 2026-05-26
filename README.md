# 🖥️ TechStore - Ecommerce Frontend

Aplicación Ecommerce desarrollada con React + Vite enfocada en arquitectura escalable, UX/UI moderna y buenas prácticas frontend profesionales.

El proyecto simula una tienda tecnológica donde los usuarios pueden navegar productos, filtrarlos por categorías y marcas, visualizar detalles completos y administrar un carrito de compras dinámico.

---

# 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Lucide React
- CSS3
- JavaScript ES6+

---

# 🎯 Objetivos del proyecto

- Practicar arquitectura escalable en React
- Implementar navegación profesional
- Aplicar Context API para manejo global de estado
- Diseñar una UX/UI moderna estilo ecommerce real
- Separar lógica de presentación
- Aplicar buenas prácticas frontend
- Mejorar mantenibilidad y escalabilidad

---

# 📂 Arquitectura del proyecto

```bash
src/
├── components/
│
│   ├── cart/
│   │   ├── CartContainer.jsx
│   │   ├── CartView.jsx
│   │   ├── CartWidget.jsx
│   │   └── EmptyCart.jsx
│   │
│   ├── products/
│   │   ├── CarouselProducts.jsx
│   │   ├── Item.jsx
│   │   ├── ItemCount.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemList.jsx
│   │   └── ItemListContainer.jsx
│   │
│   ├── layout/
│   │   └── Navbar.jsx
│   │
│   └── ui/
│       ├── Error.jsx
│       └── Loader.jsx
│
├── context/
│   ├── CartContext.jsx
│   └── NotificationContext.jsx
│
├── utils/
│   ├── cartUtils.js
│   └── formatPrice.js
│   └── getRandomProducts.js
│
├── constants/
│   └── index.js
│
├── css/
│
├── data/
│   └── products.js
│
└── App.jsx