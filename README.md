# 🖥️ TechStore - Ecommerce Frontend

Aplicación Ecommerce desarrollada con React + Vite enfocada en arquitectura escalable, UX/UI moderna y buenas prácticas frontend profesionales.

El proyecto simula una tienda tecnológica donde los usuarios pueden navegar productos, filtrarlos por categorías y marcas, visualizar detalles completos, administrar un carrito dinámico y finalizar compras integradas con Firebase Firestore.

---

# 🚀 Tecnologías utilizadas

* React
* Vite
* React Router DOM
* Context API
* Firebase Firestore
* Lucide React
* CSS3
* JavaScript ES6+

---

# 🔥 Funcionalidades implementadas

## 🛍️ Catálogo de productos

* Listado dinámico de productos desde Firebase
* Filtrado por categorías
* Filtrado por marcas
* Navegación por rutas dinámicas
* Item Detail completo
* Carrusel interactivo estilo Netflix/Disney+

---

## 🛒 Carrito de compras

* Agregar productos al carrito
* Incrementar/disminuir cantidades
* Validación de stock máximo
* Eliminación individual de productos
* Vaciar carrito completo
* Cálculo automático de:

  * subtotal
  * total
  * cantidad de productos
* Persistencia global mediante Context API

---

## 🔔 Sistema de notificaciones

* Notificaciones push dinámicas
* Estados:

  * success
  * error
  * info
* Auto close
* Cierre manual mediante botón

---

## 💳 Checkout profesional

* Formulario desacoplado
* Validaciones externas reutilizables
* Confirmación de email
* Validación de teléfono
* Generación de órdenes en Firebase
* Pantalla de compra exitosa
* Protección contra acceso con carrito vacío

---

# 🔥 Firebase Firestore

Migración completa desde datos locales (`products.js`) hacia Firebase Firestore.

## Implementaciones realizadas

* Obtención de productos desde Firestore
* Obtención de producto individual
* Categorías dinámicas desde Firebase
* Marcas dinámicas desde Firebase
* Creación de órdenes en colección `orders`
* Arquitectura desacoplada mediante services

---

# 🎯 Objetivos del proyecto

* Practicar arquitectura escalable en React
* Implementar navegación profesional
* Aplicar Context API para manejo global de estado
* Integrar Firebase Firestore
* Diseñar una UX/UI moderna estilo ecommerce real
* Separar lógica de presentación
* Aplicar buenas prácticas frontend
* Mejorar mantenibilidad y escalabilidad
* Simular comportamientos reales de ecommerce

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
│   ├── checkout/
│   │   ├── CheckoutContainer.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── CheckoutSuccess.jsx
│   │   └── CheckoutSummary.jsx
│   │
│   ├── layout/
│   │   └── Navbar.jsx
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
│   └── ui/
│       ├── Error.jsx
│       └── Loader.jsx
│
├── constants/
│   └── index.js
│
├── context/
│   ├── CartContext.jsx
│   └── NotificationContext.jsx
│
├── css/
│   ├── carouselProducts.css
│   ├── cart.css
│   ├── checkout.css
│   ├── error.css
│   ├── itemCount.css
│   ├── itemDetail.css
│   ├── loader.css
│   ├── navbar.css
│   └── notification.css
│
├── data/
│   ├── orders.js
│   └── products.js
│
├── service/
│   └── firebase.jsx
│
├── utils/
│   ├── cartUtils.js
│   ├── checkoutValidations.js
│   ├── formatPrice.js
│   └── getRandomProducts.js
│
├── App.jsx
│
└── main.jsx
```

---

# 🧠 Arquitectura aplicada

El proyecto utiliza una arquitectura basada en features para mejorar:

* Escalabilidad
* Separación de responsabilidades
* Reutilización
* Mantenibilidad
* Organización profesional

Cada feature encapsula:

* componentes
* lógica
* estilos
* validaciones
* utilidades

---

# 🎨 UX/UI implementada

La aplicación implementa una interfaz moderna inspirada en ecommerce profesionales:

* Gradientes tecnológicos
* Hover animations
* Cards interactivas
* Navbar responsive
* Dropdowns dinámicos
* Carrusel cinematográfico
* Animaciones suaves
* Mobile responsive
* Feedback visual inmediato

---

# 📱 Responsive Design

La aplicación está optimizada para:

* Desktop
* Tablet
* Mobile

Incluyendo:

* Navbar adaptable
* Carrusel responsive
* Cart responsive
* Checkout responsive
* Dropdowns móviles

---

# 🔄 Flujo de compra

```txt
Home
→ Producto
→ Carrito
→ Checkout
→ Generación de orden
→ Success Screen
```

---

# 🔥 Próximas mejoras

* Auth con Firebase
* Persistencia de carrito
* Panel administrador
* Búsqueda global
* Wishlist
* Sistema de pagos
* Skeleton loaders
* Dark mode
* TanStack Query
* Testing

---

# ▶️ Instalación

```bash
npm install
```

---

# ▶️ Ejecutar proyecto

```bash
npm run dev
```

---

# 🔥 Variables de entorno

Crear archivo `.env`

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

# 👨‍💻 Autor

Desarrollado por Bryan Marquez como práctica avanzada de React, arquitectura frontend y Firebase.
