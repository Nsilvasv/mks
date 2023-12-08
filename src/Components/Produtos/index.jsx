import { FiShoppingBag } from "react-icons/fi";
import { useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

// eslint-disable-next-line react/prop-types
const Produtos = ({id, photo, name, price}) => {

  const { cart, setCart} = useContext(CartContext)

  const addCart = (novo) => {
   // const existeProduto = cart.some(produto => produto.id === novo)
     
    return setCart(item => [...item, novo])
  }

  console.log(cart);

  return (
            
    <div key={id} className='bg-white w-56 h-72 grid my-8 justify-items-center rounded-lg border border-slate-100 shadow-lg'>

      <img src={photo} className='w-40 h-40 flex justify-center content-center'/>
      <div className='flex bg-gray-400 h-12  '>
        <h1 className='w-28 bg-orange-200 text-base font-light'>{name}</h1>
        <p className='bg-black rounded-md text-white font-bold h-6 px-1 '>R${price}</p>
      </div>
      
      <div className='flex items-end w-full'>
        <button className='bg-blue-800 text-white rounded-b-lg w-full h-8 flex justify-center items-center' 
          onClick={() => addCart({id, name, photo, price})}
        >
          
          <FiShoppingBag className='mx-3'/> COMPRAR </button>
      </div>

    </div>
        
    
  );
};

export default Produtos;
