import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Topbar from "./Components/Topbar/Topbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import UserList from "./Pages/UserList/UserList.jsx";
import User from "./Pages/User/User.jsx";
import NewUser from "./Pages/NewUser/NewUser.jsx";
import ProductList from "./Pages/ProductList/ProductList.jsx";
import Product from "./Pages/Product/Product.jsx";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <BrowserRouter>
      <Topbar open={open} toggleDrawer={toggleDrawer} />
      <div className="container">
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          {/* <Route path="/newproduct" element={<NewProduct />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
