import { useContext } from "react";
import { CartContext } from "./Context/CartContext.jsx";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
 



  return (
    <div className="min-h-100">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">{
        cartItems.map((item) => (
          <div
            key={item.id}
            className="border-b  gap-4"
          >
            
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="aspect-square rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="bg-gray-800 text-white px-6 py-1 rounded hover:bg-gray-700 transition mb-1">
              Order
            </button>{" "}
            <br />
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-gray-800 text-white px-6 py-1 rounded mb-1 hover:bg-gray-700 transition"
            >
              Remove
            </button>
            <br />
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
