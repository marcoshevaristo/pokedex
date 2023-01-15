import { useEffect } from 'react';
import { PageContainer } from '../../components/ui/PageContainer';
import usePokemonQuery from '../../hooks/usePokemonQuery';
import { Pokemon } from '../../models/Pokemon';
import { PokedexItem } from './components/PokedexItem';
import './styles.css';

function isPikachuVariation(pokemon: Pokemon) {
  return pokemon.num === 25 && pokemon.species !== 'pikachu-original';
}

function filterDuplicatedSpecies(pokemon: Pokemon[] = []) {
  return pokemon.reduce((acc: Pokemon[], curr) => {
    const isVariation = acc.some((pokemon) => pokemon.num === curr.num);
    if (isVariation || isPikachuVariation(curr)) {
      return acc;
    }
    return acc.concat([curr]);
  }, [] as Pokemon[]);
}

function PokemonList() {
  const { isSuccess, data, isLoading, hasNextPage, fetchNextPage } = usePokemonQuery();

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <PageContainer>
      <ul className='pokemon-list'>
        {filterDuplicatedSpecies(data?.pages.reduce((acc, curr) => acc.concat(curr), [])).map((pokemon) => (
          <li className='pokemon-item' key={pokemon.num}>
            <PokedexItem pokemon={pokemon}></PokedexItem>
          </li>
        ))}
      </ul>
      {/* <p ref={loadMoreRef}>Carregando Pokémon...</p> */}
    </PageContainer>
  );
}

export default PokemonList;
