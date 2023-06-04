import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CategoryItemPage from "./pages/CategoryItemPage/CategoryItemPage";
import ProductItemPage from "./pages/ProductItemPage/ProductItemPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import HomePage from "./pages/HomePage/HomePage";


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CategoriesPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/sales/all" element={<SalesPage />} />
        <Route path="/categories/:id" element={<CategoryItemPage />} />
        <Route path="/products/:id" element={<ProductItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFoundPage />} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
