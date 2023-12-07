import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    

    const obj = {
        cart,
        setCart
    }

    return <CartContext.Provider value={obj}> {children} </CartContext.Provider>
    
}

export default CartProvider

CartProvider.propTypes = {
    children: PropTypes.any,
}.isRequired