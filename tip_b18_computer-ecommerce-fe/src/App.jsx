import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./component/Pages/HomePage";
import Login from "./component/Pages/Login";
import Register from "./component/Pages/Register";
import Forgotpassword from "./component/Pages/Forgotpassword";
import ProDuct from "./component/Pages/ProDuct";
import Admin from "./component/Admins/Admin";
import ProductManagement from "./component/Admins/ProductManagement";
import Detail from "./component/Pages/Detail"
import Cart from "./component/Pages/Cart"
import ProfilePage from "./component/Pages/ProfilePage"


function App() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={< ProfilePage/>} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ProDuct" element={<ProDuct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
