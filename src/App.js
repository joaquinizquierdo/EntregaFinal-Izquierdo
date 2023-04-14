import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='appContainer'>
      <BrowserRouter>
        <div className='contentWrap'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home aviso={'¡6 CUOTAS SIN INTERES!'}/>}/>
            <Route path='/products' element={<ItemListContainer greeting={'Productos'}/>}/>
            <Route path='/products/category/:categoryId' element={<ItemListContainer greeting={'Productos'}/>}/>
            <Route path='/products/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
