import { useQuery } from 'react-query';
import { FiShoppingBag } from "react-icons/fi";
import { useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

const Produtos = () => {


  const { addCart} = useContext(CartContext)


  const { data, isLoading, error } = useQuery('products', () =>
    fetch(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
    ).then((res) => res.json())
  );

  if (isLoading) return 'Carregando...'; 

  if (error) return 'Ocorreu um erro!: ' + error.message;

  // Verifica se data existe e se data.products existe antes de acessá-lo
  const dados = data && data.products ? data.products : [];

  return (
    
    <div className=" grid grid-rows-2  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-28 justify-items-center">
        {dados.map((item) => (
          <div key={item.id} className='bg-white w-56 h-72 grid my-8 justify-items-center rounded-lg border border-slate-100 shadow-lg'>

            <img src={item.photo} className='w-40 h-40 flex justify-center content-center'/>
            <div className='flex bg-gray-400 h-12  '>
              <h1 className='w-28 bg-orange-200 text-base font-light'>{item.name}</h1>
              <p className='bg-black rounded-md text-white font-bold h-6 px-1 '>R${item.price}</p>
            </div>
            
            <div className='flex items-end w-full'>
              <button className='bg-blue-800 text-white rounded-b-lg w-full h-8 flex justify-center items-center' onClick={addCart}> 
                <FiShoppingBag className='mx-3'/> COMPRAR </button>
            </div>

          </div>
        ))}
    </div>
  );
};

export default Produtos;
