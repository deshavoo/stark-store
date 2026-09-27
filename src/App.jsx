import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import ProductModal from "./components/ProductModal";
import WhyStark from "./components/WhyStark";
import SocialProof from "./components/SocialProof";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.cartId === existingItem.cartId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          cartId: `${product.id}-${product.size}-${Date.now()}`,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      setCart((currentCart) =>
        currentCart.filter((item) => item.cartId !== cartId)
      );

      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const removeFromCart = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId)
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        products={products}
        onProductSelect={setSelectedProduct}
      />

      <Hero />

      <BestSellers
        onAddToCart={addToCart}
        onProductSelect={setSelectedProduct}
      />

      <WhyStark />

      <SocialProof />

      <Locations />

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </main>
  );
}

export default App;
