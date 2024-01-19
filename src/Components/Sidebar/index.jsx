import { useContext, useState } from "react"
import tw from "tailwind-styled-components"
import { CartContext } from "../../Context/CartContext"
import { XMarkIcon } from '@heroicons/react/24/outline'


const Sidebar = tw.div`
    bg-blue-700
    fixed 
    right-0 
    top-0 
    h-screen 
    transition-opacity 
    overflow-auto
`
const TituloCart = tw.h2`
    text-2xl 
    font-bold 
    text-white
`
const BtnFechar = tw.div`
    rounded-full 
    ml-3  
    flex  
    items-center 
    bg-black
`
const Card = tw.div`
    h-auto 
    sm:h-24 
    bg-white 
    mb-6 
    rounded-lg 
    w-auto
`
const Name = tw.div`
    mx-5 
    py-4 
    flex 
    justify-start 
    items-center 
    w-24 
    sm:w-24 
    text-sm 
    font-normal 
    text-zinc-800
`
const ContainerBtns = tw.div`
    border 
    border-zinc-200 
    rounded-lg 
    w-20 
    h-7 
    mr-4 
    flex 
    justify-center 
    items-center
`
const BtnRemove = tw.button`
    bg-black 
    text-white 
    rounded-full 
    p-1 
    -m-2
`
const Img = tw.img`
    h-full 
    w-full 
    object-cover 
    object-center
`
const Preco = tw.div`
    flex 
    justify-center 
    w-20 
    items-center 
    font-bold
`
const ConteudoCard = tw.div`
    flex 
    flex-wrap 
    justify-center 
    items-center 
    mt-3 
    pb-2
`
const BtnFinalizar = tw.a`
    flex 
    items-center 
    justify-center 
    rounded-md 
    border 
    border-transparent 
    bg-black 
    px-6 
    py-3 
    text-lg 
    font-medium 
    text-white 
    shadow-sm 
`

const Sidebarr = () => {
    const [open, setOpen] = useState(false)

    const { cart, addCart, removeItem, clearItem, cartTotal } = useContext(CartContext)


    return(
        <Sidebar className={` ${open ? "w-auto" : "w-0"} `}>
                <div className="pointer-events-auto w-screen  max-w-md ">
                <div className="flex h-full flex-col  shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                            <TituloCart>Carrinho de compras</TituloCart>
                                <BtnFechar>
                                    <button
                                        type="button"
                                        className="relative p-1 text-white "
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                
                                </BtnFechar>
                        </div>
                        
                            {cart.map((product) => (
                                <div key={product.id} className="mt-10">


                                    <Card key={product.id} >
                                        
                                        <div className="flex justify-end ">
                                            <BtnRemove onClick={() => removeItem(product)} > 
                                                <XMarkIcon className="h-3 w-3" aria-hidden="true" /> 
                                            </BtnRemove>

                                        </div>

                                        <ConteudoCard>

                                        
                                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden">
                                                <Img src={product.photo} alt={product.photo} />
                                            </div>

                                            <div className=" flex flex-wrap  justify-center items-center ">
                                                
                                                <Name>
                                                    <h3>{product.name}</h3>
                                                </Name>
                                                    
                                                <div className="flex justify-center items-center ">
                                                
                                                    <ContainerBtns>
                                                        
                                                        <button data-testid="btn-add" onClick={() => addCart(product)}>+</button>

                                                        <span data-testid="qtd" className="px-2 flex justify-center items-center">
                                                            {product.quantity}
                                                        </span>
                                                        
                                                        <button onClick={() => clearItem(product)}>-</button>

                                                    </ContainerBtns>

                                                    <Preco>
                                                        <p>{product.price}</p>
                                                    </Preco>
                                            
                                                </div>

                                            </div>
                                        </ConteudoCard>

                                    </Card>

                                </div>
                            ))}

                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-2xl font-bold text-white">
                            <p>Total:</p>
                            <p>R${cartTotal()}</p>
                        </div>
                        <div className="mt-6">
                            <BtnFinalizar href="#">
                            Finalizar compra
                            </BtnFinalizar>
                        </div>
    
                    </div>
                    
                </div>
                </div>
            </Sidebar>
    )
}

export default Sidebarr