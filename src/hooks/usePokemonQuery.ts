import { useQuery } from 'react-query';
import { getPokemons } from '../services/PokemonService';

const usePokemonQuery = (offset: number, pageSize: number) => {
  const { isSuccess, data } = useQuery('pokemon-list', () => getPokemons(offset, pageSize));
  if (!isSuccess) return [];
  return data;
};

export default usePokemonQuery;
