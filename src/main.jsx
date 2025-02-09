import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./context/userContext";
import CartProvider from "./context/CartContex";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
