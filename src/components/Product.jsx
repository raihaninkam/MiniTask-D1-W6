const Product = ({ name, price, img, onAddToCart }) => {
  return (
    <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-sm">
      <img src={img} alt={name} className="mb-2 w-full h-48"/>  
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="font-bold">{price}</p>
      <button
        onClick={() => onAddToCart({ name, price })}
        className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;