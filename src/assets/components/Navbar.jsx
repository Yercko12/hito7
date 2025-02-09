import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
    const { totalPrice } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);

    return (
        <nav>
            <Link to="/">🍕 Home</Link>
            {token ? (
                <>
                    <Link to="/profile">🔓 Profile</Link>
                    <button onClick={logout}>🔒 Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">🔐 Login</Link>
                    <Link to="/register">🔐 Register</Link>
                </>
            )}
            <Link to="/cart">🛒 Total: ${totalPrice.toFixed(2)}</Link>
        </nav>
    );
};

export default Navbar;
