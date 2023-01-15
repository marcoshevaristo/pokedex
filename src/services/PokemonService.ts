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

  return response.data.data.getAllPokemon;
}
