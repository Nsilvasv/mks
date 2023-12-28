import { FiShoppingBag } from "react-icons/fi";
import { useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

// eslint-disable-next-line react/prop-types
const Produtos = ({id, photo, name, price}) => {

  const { addCart } = useContext(CartContext)

  const addItemToCart = () => {
    addCart({ id, name, photo, price });
  }

  return (
            
    <div key={id} className='bg-white m-7 w-56  h-72 grid justify-items-center rounded-lg border border-slate-100 shadow-lg'>

      <img src={photo} className='w-40 h-40 flex justify-center content-center'/>
      <div className='flex  h-12  '>
        <h1 className='w-28  text-base font-light'>{name}</h1>
        <p className='bg-black rounded-md text-white font-bold h-6 px-1 '>R${price}</p>
      </div>
      
      <div className='flex items-end w-full'>
        <button className='bg-blue-800 text-white rounded-b-lg w-full h-8 flex justify-center items-center' 
          onClick={() => addItemToCart({id, name, photo, price})}
        >
          
          <FiShoppingBag className='mx-3'/> COMPRAR </button>
      </div>

    </div>
        
    
  );
};

export default Produtos;
