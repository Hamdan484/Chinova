import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext.jsx";
import { useAuth } from "./Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceValue = parseFloat(item.price.replace('$', ''));
    return acc + priceValue;
  }, 0);

  const handleOrder = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      const token = localStorage.getItem('chinova_token');
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cartItems,
          total_price: totalPrice
        })
      });

      if (res.ok) {
        setStatus("Order placed successfully! ☕");
        setTimeout(() => {
          clearCart();
          navigate('/');
        }, 2000);
      } else {
        const data = await res.json();
        setStatus("Error: " + data.message);
      }
    } catch (err) {
      setStatus("Error connecting to server.");
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 font-serif">Your Cart</h1>

      {status && <p className="mb-4 text-center font-bold text-gray-800 bg-gray-100 p-4 rounded">{status}</p>}

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
          <p className="text-gray-500 text-lg">Your cart is feeling empty. Time to get some coffee!</p>
          <button onClick={() => navigate('/products')} className="mt-4 bg-gray-900 text-white px-8 py-2 rounded-full">Browse Menu</button>
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </a>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{item.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm font-medium text-red-600 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${totalPrice.toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                onClick={handleOrder}
                className="w-full rounded-md border border-transparent bg-gray-900 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 uppercase tracking-widest transition"
              >
                {user ? "Confirm Order" : "Login to Place Order"}
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Cart;
