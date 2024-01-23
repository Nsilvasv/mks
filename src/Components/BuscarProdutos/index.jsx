import { useQuery } from 'react-query';
import tw from 'tailwind-styled-components';
import Produto from '../Produto';

const Main = tw.div`
  flex
  justify-center
  bg-slate-50 
  
`
const Cards = tw.div`
  grid 
  grid-rows-2 
  xl:grid-cols-4 
  lg:grid-cols-4 
  md:grid-cols-3 
  sm:grid-cols-2 
  max-w-max 
  my-28
`
const Loading = tw.div`
flex 
justify-center 
items-center 
my-72 
`

const BuscarProdutos = () => {
  const { data, isLoading, error } = useQuery('products', () =>
    fetch(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
    ).then((res) => res.json())
  );

  if (isLoading) return <Loading> <p className='text-2xl font-serif font-medium'>Carregando...</p> </Loading> 

  if (error) return 'Ocorreu um erro!: ' + error.message;

  const dados = data && data.products ? data.products : [];

  return (
    
    <Main>
      <Cards>
        {dados.map(item => (
          <Produto key={item.id} name={item.name} photo={item.photo} price={item.price} description={item.description} />
        ))}
      </Cards>  
    </Main>

  )
};

export default BuscarProdutos;
