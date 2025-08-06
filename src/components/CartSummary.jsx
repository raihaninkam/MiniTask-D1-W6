const CartSummary = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-sm">
      <div className="flex gap-4 items-center">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <img src="/shopping-cart (2).svg" alt="" />
      </div>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded"/>
              <span>
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() => onRemoveFromCart(index)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartSummary;