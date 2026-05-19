import './App.css'
import NavBar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer  from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./components/Error"
import CarouselProducts from './components/CarouselProducts';

function App() {


  return (
    <BrowserRouter>
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<><CarouselProducts/><ItemListContainer/></>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/category/:category/:brand" element={<ItemListContainer />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
