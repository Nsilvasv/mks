/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react" 
import Navbar from "./index"
import { CartProvider } from "../../Context/CartContext"

describe('navbar componente', () => {

    it('renderiza button em navbar', () => {
        render(
            <CartProvider>
                <Navbar/>
            </CartProvider>
        )
        const button = screen.getByTestId('btn-cart')
        expect(button).toBeInTheDocument()
    })

    it('Abrir sidebar quando clicar em botão', () => {
        render(
            <CartProvider>
                <Navbar/>
            </CartProvider>
        )
        const button = screen.getByTestId('btn-cart')
        fireEvent.click = (button)
        expect(screen.getByText('Carrinho de compras'))
    })
    
})
