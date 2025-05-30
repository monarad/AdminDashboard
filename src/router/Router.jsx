import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthProvider from "../providers/AuthProvider";
//import { getCookie } from "../utils/cookie";

function Router() {
  // const token=getCookie("token")
  // console.log(token)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <ProductsPage />
            </AuthProvider>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
