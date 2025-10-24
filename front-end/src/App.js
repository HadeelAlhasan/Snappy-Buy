import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/parts-page/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import Terms from "./components/parts-page/Terms";
import Questions from "./components/parts-page/Questions";
import LogIn from "./components/Account/LogIn";
import CreateAccount from "./components/Account/CreateAccount";
import Groups from "./components/group/Groups";
import My_cart from "./components/My_cart/My_cart";
import Products from "./components/products/Products";
import Cart_info from "./components/My_cart/Cart_info";
import Profile from "./components/Account/Profile";
import DashboardList from "./components/dashboard/DashboardList";
import DashBoard from "./components/dashboard/DashBoard";
import GroupManager from "./components/dashboard/GroupManager";
import ProductManager from "./components/dashboard/ProductManager";
import Users from "./components/dashboard/Users";
import AddProduct from "./components/dashboard/AddProduct";
import { useTranslation } from "react-i18next";
import EditProduct from "./components/dashboard/EditProduct";
import EditPage from "./components/dashboard/EditPage";

function App() {
  const { t } = useTranslation();
  sessionStorage.setItem("sort", t("sort"));
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Questions" element={<Questions />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
          <Route path="/login" element={<Profile />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/group" element={<Groups />} />
          <Route path="/card" element={<My_cart />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products" element={<Products />} />

          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit" element={<EditProduct />} />
          <Route path="/det" element={<Cart_info />} />

          <Route path="/dashboard-list" element={<DashboardList />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/groupsm" element={<GroupManager />} />
          <Route path="/prductm" element={<ProductManager />} />
          <Route path="/users" element={<Users />} />

          <Route path="/dashboard-list" element={<DashboardList />} />
          <Route path="/dashboard-list" element={<DashboardList />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/groupsm" element={<GroupManager />} />
          <Route path="/prductm" element={<ProductManager />} />
          <Route path="/users" element={<Users />} />
          <Route path="/editPage" element={<EditPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
