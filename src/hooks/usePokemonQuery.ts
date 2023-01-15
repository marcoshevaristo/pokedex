import { useInfiniteQuery } from 'react-query';
import { getPokemons } from '../services/PokemonService';

const pageSize = 20;

const usePokemonQuery = () => {
  return useInfiniteQuery('pokemon-list', ({ pageParam = 0 }) => getPokemons(pageParam, pageSize), {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.reduce((acc, curr) => acc.concat(curr), []).length + pageSize;
      return nextPage;
    },
    refetchOnWindowFocus: false,
  });
};

export default usePokemonQuery;
