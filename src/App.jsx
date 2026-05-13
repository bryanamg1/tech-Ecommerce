import './App.css'
import NavBar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./components/Error"

function App() {


  return (
    <BrowserRouter>
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
