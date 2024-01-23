import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import Produto from "."
import CartProvider from "../../Context/CartContext"


describe('testa cart de produto', () => {
    it('testa funcionamento de button de add ao carrinho', () => {
        render(
            <CartProvider>
                <Produto  />
            </CartProvider>
        )
        
        // verifica se existe cart
        const cart = screen.getByTestId('cart-id')
        expect(cart).toBeInTheDocument()
        
        const btn = screen.getByTestId('btn-add')
        expect(cart).toBeInTheDocument()

        fireEvent.click(btn)
        //verificar se está sentando após o click



    })
})