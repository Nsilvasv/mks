import { FiShoppingBag } from "react-icons/fi";
import { useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import tw from "tailwind-styled-components";

const Card = tw.div`
  bg-white 
  m-7 
  w-56 
  h-80 
  grid 
  justify-items-center 
  rounded-lg 
  border 
  border-slate-100 
  shadow-lg
`
const Img = tw.img`
  w-28 
  h-28 
  flex 
  justify-center 
  content-center
  my-5
`
const Name = tw.h1`
  w-28 
  text-base 
  font-light
`
const Preco = tw.p`
  bg-black 
  rounded-md 
  text-white 
  font-bold 
  h-6 
  px-1
`
const BtnComprar = tw.button`
  bg-blue-800 
  text-white 
  rounded-b-lg 
  w-full 
  h-8 
  flex 
  justify-center 
  items-center
`
// eslint-disable-next-line react/prop-types
const Produto = ({id, photo, name, price, description}) => {

  const { addCart } = useContext(CartContext)

  const addItemToCart = () => {
    // eslint-disable-next-line no-undef
    addCart({ id, name, photo, price, description });
  }

  return (
            
    <Card key={id}  data-testid='cart-id'>

      <Img src={photo}/>

      <div className='flex h-12'>
        <Name>{name}</Name>
        <Preco>R${price}</Preco>
      </div>

      <div className="h-20 px-2 flex justify-center items-center">
        <p className="text-xs text-gray-900 font-light h-16 ">{description}</p>
      </div>

      <div className='flex items-end w-full'>
        <BtnComprar data-testid='btn-add' onClick={() => addItemToCart({id, name, photo, price})} >
          <FiShoppingBag className='mx-3'/> COMPRAR 
        </BtnComprar>
      </div>

    </Card>
        
    
  );
};

export default Produto;
