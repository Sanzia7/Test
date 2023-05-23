import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import ProductsListPage from './pages/ProductsListPage/ProductsListPage'
import ProductDescriptPage from './pages/ProductDescriptPage/ProductDescriptPage';
import CartPage from './pages/CartPage/CartPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/products/categories/:id' element={<ProductsListPage />} />
        <Route path='/products/all' element={<ProductsListPage />} />
        <Route path='/products/sale' element={<ProductsListPage />} />
        <Route path='/product/:id' element={<ProductDescriptPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App
