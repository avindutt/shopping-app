import React from 'react';
import Navbar from './features/Navbar';
import Main from './features/main';
import { Route, Routes } from 'react-router-dom';
import Wishlist from './features/Wishlist';
import ProductDetail from './features/ProductDetail';
import Cart from './features/Cart';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

function App() {
  const product = useSelector((state) => state.ProductDetail);
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/product-details/:id' element={<ProductDetail/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     </Routes>
    </div>
  );
}

export default App;