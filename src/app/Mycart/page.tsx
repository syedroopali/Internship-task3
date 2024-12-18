'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Subscribe from '@/Components/Subscribe';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Pre-defined products
const products: CartItem[] = [
  
  { id: 9, name: "Blender", image: "/images/14.png", price: 1299.99, quantity: 1 },
  
  
];

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Initialize cart with pre-defined products
    setCart(products);
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    router.push('/Mycart/Checkout');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
        
        {/* Cart Items */}
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className="text-xl">Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                    width={96}
                    height={96}
                  />
                  <div>
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                    <button 
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold">${calculateTotal()}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

