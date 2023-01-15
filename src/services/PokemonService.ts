import api from '../api';
import { Pokemon } from '../models/Pokemon';

export async function getPokemons(offset: number, pageSize: number) {
  const response = await api.post<{ data: { getAllPokemon: Pokemon[] } }>(
    ``,
    JSON.stringify({
      query: `
        {
            getAllPokemon(offset: ${offset + 88}, take: ${pageSize}) {
                sprite
                num
                species
                types {
                    name
                }
            }
        }
    `,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );

  return reduceResponse(response.data.data.getAllPokemon);
}

function reduceResponse(pokemon: Pokemon[]) {
  return pokemon.reduce((acc: Pokemon[], curr) => {
    const isVariation = acc.some((pokemon) => pokemon.num === curr.num);
    if (isVariation) {
      return acc;
    }
    return acc.concat([curr]);
  }, [] as Pokemon[]);
}
