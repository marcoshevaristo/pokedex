import React from 'react';
import { PageContainer } from '../../components/ui/PageContainer';
import usePokemonQuery from '../../hooks/usePokemonQuery';
import { PokedexItem } from './components/PokedexItem';
import './styles.css';

function PokemonList() {
  const [offset, setOffset] = React.useState(0);
  const pokemonList = usePokemonQuery(offset, 100);
  return (
    <PageContainer>
      <ul className='pokemon-list'>
        {pokemonList.map((pokemon) => (
          <li className='pokemon-item' key={pokemon.num}>
            <PokedexItem pokemon={pokemon}></PokedexItem>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}

export default PokemonList;
