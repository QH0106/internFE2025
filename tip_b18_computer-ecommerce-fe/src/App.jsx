import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./component/Admins/Admin";
import ProductManagement from "./component/Admins/ProductManagement";
import UserManagement from "./component/Admins/UserManagement";
import CategoriesManagement from "./component/Admins/CategoriesManagement";
import OrderManagement from "./component/Admins/OrderManagement";
import { ProductI3, ProductI5, ProductI7, ProfilePage,
PurchaseHistoryPage, ConfirmOrderPage, Cart, Detail, ProDuct,
HomePage, Login, Register, Forgotpassword } from "./component/Router";
import MainLayout from "./component/modules/MainLayout";
import { setAuthToken } from "./component/Author/axiosInstance";


function App() {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthToken(token); 
      }
    }, []);
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />  
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ProDuct" element={<ProDuct cart={cart} setCart={setCart} />} />
          <Route path="Cart" element={<Cart cart={cart} />} />
          <Route path="Detail/:id" element={<Detail cart={cart} setCart={setCart} />} />
          <Route path="ProfilePage" element={<ProfilePage />} />
          <Route path="ConfirmOrderPage" element={<ConfirmOrderPage />} />
          <Route path="ProductI3" element={<ProductI3 />} />
          <Route path="ProductI5" element={<ProductI5 />} />
          <Route path="ProductI7" element={<ProductI7 />} />
          <Route path="PurchaseHistoryPage" element={<PurchaseHistoryPage />} />
        </Route>

        {/* Các route không dùng layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/ProductManagement" element={<ProductManagement />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/CategoriesManagement" element={<CategoriesManagement />} />
        <Route path="/OrderManagement" element={<OrderManagement />} />
      </Routes>
    </div>
  );
}

export default App;
