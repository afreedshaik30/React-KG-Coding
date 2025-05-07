import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "../Components/NavBar/NavBar.jsx";
import Home from "../Pages/Home/Home.jsx";
import Auth from "../Pages/Auth/Auth.jsx";
import Login from "../Pages/Auth/Login/Login.jsx";
import Register from "../Pages/Auth/Register/Register.jsx";
import Error from "../Pages/Error/Error.jsx";
import AuthCheck from "../AuthCheck/AuthCheck.jsx";

function MainLayout() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainLayout;
