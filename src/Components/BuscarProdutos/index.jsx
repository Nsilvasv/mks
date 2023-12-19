import { useQuery } from 'react-query';
import Produtos from '../Produtos';

const BuscarProdutos = () => {
  const { data, isLoading, error } = useQuery('products', () =>
    fetch(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
    ).then((res) => res.json())
  );

  if (isLoading) return 'Carregando...';

  if (error) return 'Ocorreu um erro!: ' + error.message;

  const dados = data && data.products ? data.products : [];

  console.log(dados);

  return (
    
    <div className=" grid grid-rows-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  my-28 justify-items-center ">
      {dados.map(item => (
        <Produtos  key={item.id}  name={item.name} photo={item.photo} price={item.price}/>
    ))}
    </div>

  )
};

export default BuscarProdutos;
