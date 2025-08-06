import { useState } from 'react';
import Product from './Product';
import CartSummary from './CartSummary';
import Auth from './Auth';


const ShoppingApp = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { name: 'Macbook Pro M4', price: 'Rp 45.000.000', img:'/macbook.jpeg'},
    { name: 'Iphone 15 Promax', price: 'Rp 23.000.000', img:'/iphone.jpeg' },
    { name: 'Headphones', price: 'Rp 3.600.000', img:'/jbl.jpeg' },
    { name: 'Fender Stratocaster', price: 'Rp 8.500.000', img:'/guitar.jpeg' },
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <>
    <Auth/>
    <div className="container mx-auto p-4 mt-12">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <Product
                key={index}
                name={product.name}
                price={product.price}
                img={product.img}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/3">
            
                <CartSummary
                onRemoveFromCart={handleRemoveFromCart}
                cartItems={cartItems}
              />
        
        </div>
      </div>
    </div>
    </>
  );
};

export default ShoppingApp;