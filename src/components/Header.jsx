import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { cart, removeFromCart, clearCart } = useCart();

  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Plaza</h1>

      <div className="relative">
        <button
          onClick={() => setShowDropDown(!showDropDown)}
          className="cursor-pointer"
        >
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>

        {showDropDown && (
          // The parent is relative. So it arranges this div relative to its parent.
          <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Cart is empty.</p>
              ) : (
                <>
                  <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                    {cart.map((product) => (
                      <li
                        key={product.id}
                        className="flex justify-between items-center py-2"
                      >
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-gray-500">
                            {product.qty} x R${product.price}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-sm text-red-500 hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>R${totalPrice}</span>
                  </div>

                  <button
                    onClick={clearCart}
                    className="cursor-pointer mt-3 w-full text-white py-1 rounded bg-red-500 transition hover:bg-red-600"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
