import { useContext, useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'

import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";


const ButtonCart = () => {

    const [open, setOpen] = useState(false)


    const { cart,  removeItem } = useContext(CartContext)


   

      const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

    return(
        <>
            <button type="button"className="flex justify-center relative rounded w-20 p-1  bg-white "
                onClick={() => setOpen(!open)}    >
                <BsCart4 className="h-6 w-6 text-black" aria-hidden="true" /> <span className="ml-3">{cart.length}</span>
            </button>

            <div className={` bg-blue-700 fixed right-0 top-0 h-screen transition-opacity overflow-auto ${open ? "w-auto" : "w-0"} `}>
                <div className="pointer-events-auto w-screen  max-w-md ">
                <div className="flex h-full flex-col  shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-2xl font-bold text-white">Carrinho de compras</h2>
                                <div className="rounded-full ml-3  flex  items-center bg-black ">
                                    <button
                                        type="button"
                                        className="relative p-1 text-white "
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                
                                </div>
                        </div>
                        
                            {cart.map((product) => (
                                <div key={product.id} className="mt-10">


                                    <div key={product.id} className=" h-auto sm:h-24 bg-white mb-6 rounded-lg w-auto">
                                        
                                        <div className="flex justify-end ">
                                            <button className="bg-black text-white rounded-full p-1 -m-2"
                                            onClick={() => removeItem(product)}    > <XMarkIcon className="h-3 w-3" aria-hidden="true" /> </button>

                                        </div>

                                        <div className="flex flex-wrap justify-center items-center mt-3 pb-2 ">

                                        
                                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden">
                                                <img
                                                    src={product.photo}
                                                    alt={product.photo}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>

                                            <div className=" flex flex-wrap  justify-center items-center ">
                                                
                                                <div className=" mx-5 py-4 flex justify-start items-center w-24 sm:w-24 text-sm font-normal text-zinc-800 ">
                                                    <h3>{product.name}</h3>
                                                </div>
                                                    
                                                <div className="flex justify-center items-center ">
                                                
                                                    <div className=" border border-zinc-200 rounded-lg w-20 h-7 mr-4 flex justify-center items-center ">
                                                        

                                                        <button >+</button>

                                                        <span className="px-2 flex justify-center items-center">1</span>
                                                        
                                                        <button >-</button>

                                                    </div>

                                                    <div className=" flex justify-center w-20 items-center font-bold">
                                                        <p>{product.price}</p>
                                                    </div>
                                            
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}

                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-2xl font-bold text-white">
                            <p>Total:</p>
                            <p>R${totalPrice}</p>
                        </div>
                        <div className="mt-6">
                            <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-lg font-medium text-white shadow-sm "
                            >
                            Finalizar compra
                            </a>
                        </div>
    
                    </div>
                    
                </div>
                </div>
            </div>
            
        </>

    )
}

export default ButtonCart