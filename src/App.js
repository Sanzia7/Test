import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";

// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchCategoriesList } from './store/asyncActions/categories';
// import { fetchProductsList } from './store/asyncActions/products';

function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchCategoriesList())
  //   dispatch(fetchProductsList())
  // }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductInfoPage />} />
        <Route path="/categories/all" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/categories/:id" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
