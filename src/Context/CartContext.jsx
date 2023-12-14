import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addCart = ({id, name, photo, price}) => {
        setCart((item) => [...item, {id, name, photo, price}] )
    }

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
      

      

    console.log(cart);

    return <CartContext.Provider value={{cart, addCart, setCart, removeItem}}> {children} </CartContext.Provider>
    
}

export default CartProvider

CartProvider.propTypes = {
    children: PropTypes.any,
}.isRequired

