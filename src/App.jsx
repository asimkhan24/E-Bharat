import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Order from "./pages/Order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import MyState from "./context/data/myState";
import Allproducts from "./pages/allProducts/Allproducts";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order/>
            </ProtectedRoute>
            } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouterForAdmin>
              <Dashboard />
            </ProtectedRouterForAdmin>
          } />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={
            <ProtectedRouterForAdmin>
              <AddProduct />
            </ProtectedRouterForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouterForAdmin>
              <UpdateProduct />
            </ProtectedRouterForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  );
};

export default App;

//user
export const ProtectedRoute = ({children}) => {
const user = localStorage.getItem('user')
if(user){
  return children
}else{
  return <Navigate to={'/login'}/>
}
}

//admin
const ProtectedRouterForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'mohdasimcodes@gmail.com'){
    return children;
  
  }else{
    return <Navigate to={'/login'}/>
  }
}
  