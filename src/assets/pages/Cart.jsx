import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { UserContext } from "../../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalPrice } = useContext(CartContext);
  const { token } = useContext(UserContext);

  if (!cart.length) return <p>El carrito está vacío.</p>;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
           <img src={item.img} alt={item.name} style={{ width: "100px", height: "100px", paddingTop:"10px", objectFit: "cover" }} />
          <h4> Pizza {item.name}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>-</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;
