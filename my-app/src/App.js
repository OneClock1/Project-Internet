import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header/Header';
import Productlist from './components/Productlist/Productlist';
import './Background.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About us/About';
import Shop from './components/Shop/Shop';

function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 855},
    {id: 2, title: 'Product 2', price: 222},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 563},
    {id: 5, title: 'Product 5', price: 389}
  ]);

  const deleteProduct = (productId) => {
    const newProduct = products.filter(product => product.id !== productId);
    setProducts(newProduct);
  }
  useEffect(()=>{
    console.log('Use Effect si running');
  },[])
  return (
    <div className="App">
      <div className="background">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path='/About' element={<About/>}></Route>   
        <Route path='/Shop' element={<Shop/>}></Route>       
       </Routes>

      <Productlist products={products} deleteProduct={ deleteProduct } />
   
    </div>
    </div>
  );
}

export default App;
