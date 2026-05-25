import './App.css'
import NavBar from "./components/layout/Navbar"
import ItemListContainer from "./components/products/ItemListContainer"
import ItemDetailContainer  from './components/products/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./components/ui/Error"
import CarouselProducts from './components/products/CarouselProducts';
import {CartProvider} from "./context/CartContext"
import { NotificationProvider } from "./context/NotificationContext";
import CartContainer from "./components/cart/CartContainer"
import { ROUTES } from "./constants/index"

function App() {


  return (
    <BrowserRouter>
    <NotificationProvider>
    <CartProvider>
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path={ROUTES.HOME} element={<><CarouselProducts/><ItemListContainer/></>}/>
        <Route path={`${ROUTES.ITEM_DETAIL}/:id`} element={<ItemDetailContainer/>}/>
        <Route path={`${ROUTES.CATEGORY}/:category`} element={<ItemListContainer/>}/>
        <Route path={`${ROUTES.CATEGORY}/:category/:brand`} element={<ItemListContainer />} />
        <Route path={ROUTES.CART} element={<CartContainer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
    </CartProvider>
    </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
