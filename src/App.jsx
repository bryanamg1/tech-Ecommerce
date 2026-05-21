import './App.css'
import NavBar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer  from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./components/Error"
import CarouselProducts from './components/CarouselProducts';
import {CartProvider} from "./contex/CartContex"
import { NotificationProvider } from "./contex/NotificationContext";
import CartContainer from "./components/CartContainer"
function App() {


  return (
    <BrowserRouter>
    <NotificationProvider>
    <CartProvider>
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<><CarouselProducts/><ItemListContainer/></>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/category/:category/:brand" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
    </CartProvider>
    </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
