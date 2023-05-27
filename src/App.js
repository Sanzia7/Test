import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import CartPage from './pages/CartPage/CartPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Footer from './components/Footer/Footer'
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories/all' element={<CategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsPage />} />
        <Route path='/products/all' element={<ProductsPage />} />
        <Route path='/products/sale' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductInfoPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App
