import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addCart = ({name, photo, price}) => {
        setCart((item) => [...item, {name, photo, price}] )
    }


    return <CartContext.Provider value={{cart, addCart}}> {children} </CartContext.Provider>
    
}

export default CartProvider

CartProvider.propTypes = {
    children: PropTypes.any,
}.isRequired

