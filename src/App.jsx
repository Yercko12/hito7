import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Pizzas from "./assets/pages/Pizzas";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Cart from "./assets/pages/Cart";
import NotFound from "./assets/pages/NotFound";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza/:pizzaId" element={<Pizzas />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<ProtectedProfile />} />
                <Route path="/login" element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
                <Route path="/register" element={<RedirectIfAuthenticated><Register /></RedirectIfAuthenticated>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};


const ProtectedProfile = () => {
    const { token } = useContext(UserContext);
    return token ? <Profile /> : <Navigate to="/login" />;
};


const RedirectIfAuthenticated = ({ children }) => {
    const { token } = useContext(UserContext);
    return token ? <Navigate to="/" /> : children;
};

export default App;
