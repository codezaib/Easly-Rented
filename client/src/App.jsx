import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/dashboard/SharedLayout";
import Home from "./Pages/dashboard/Home";
import Contact from "./Pages/dashboard/Contact";
import Categories from "./Pages/dashboard/Categories";
import CartPage from "./Pages/dashboard/CartPage";
import ProductsSection from "./Pages/dashboard/ProductsSection";
import Login from "./Pages/dashboard/Login";
import Register from "./Pages/dashboard/Register";
import ProductPage from "./Pages/dashboard/Product";
import CheckoutPage from "./Pages/dashboard/Checkout";
import AccountPage from "./Pages/dashboard/Account";
import NotFound from "./Pages/NotFound";
import Authorized from "./Pages/Authorized";
import ProtectedLayout from "./Pages/ProtectedLayout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="customer-support" element={<Contact />} />
          <Route path="categories" element={<Categories />} />
          <Route
            path="rented-category/:categoryName/:subCategoryName/:productName/:subcategory_id/:category_id"
            element={<ProductPage />}
          />
          <Route
            path="rented-category/:categoryName/:productName/:category_id"
            element={<ProductPage />}
          />
          <Route
            path="rent-category/:categoryName/:subCategoryName/:subcategory_id/:category_id"
            element={<ProductsSection />}
          />
          <Route
            path="rent-category/:categoryName/:category_id"
            element={<ProductsSection />}
          />
          <Route path="cart" element={<CartPage />} />
          <Route
            path="account"
            element={
              <ProtectedLayout>
                <AccountPage />
              </ProtectedLayout>
            }
          />
          <Route path="account/login" element={<Login />} />
          <Route path="account/register" element={<Register />} />
        </Route>
        <Route
          path="checkout"
          element={
            <ProtectedLayout>
              <CheckoutPage />
            </ProtectedLayout>
          }
        />
        <Route path="not-authorized" element={<Authorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
