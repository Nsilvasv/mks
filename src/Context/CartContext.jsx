import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addCart = (item) => {
      setCart((prevCart) => {
        const isItemInCart = prevCart.find((cartItem) => cartItem.name === item.name);
    
        if (isItemInCart) {
          return prevCart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });
    };

      
    const clearItem = (item) => {
      const isItemInCart = cart.find((cartItem) => cartItem.name === item.name);

      if (isItemInCart.quantity === 1) {
        setCart(cart.filter((cartItem) => cartItem.name !== item.name));
      } else {
        setCart(
          cart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      }
    };



    const removeItem = (name) => {
        const index = cart.findIndex((item) => item.name !== name);
      
        if (index !== -1) {
          const nova = [...cart];
          nova.splice(index, 1);
          setCart(nova);
          console.log(nova);
        } else {
          console.log("Item não encontrado no carrinho");
        }
      };
      

      const cartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };

    return <CartContext.Provider value={{cart, addCart, setCart, cartTotal, clearItem, removeItem}}> {children} </CartContext.Provider>
    
}

export default CartProvider

CartProvider.propTypes = {
    children: PropTypes.any,
}.isRequired

