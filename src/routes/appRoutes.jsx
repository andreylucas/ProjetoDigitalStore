import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Construction from "../pages/Construction";

import '../App.css'

const AppRoutes = () => (   
    
    <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<HomePage />} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/:id" element={<Product/>} />
                <Route path="/categorias/construction" element={<Construction/>} />
                <Route path="/pedidos/construction" element={<Construction/>} />
            </Route>
              <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;