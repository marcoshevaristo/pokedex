export interface Pokemon {
  num: number;
  species: string;
  sprite: string;
  types: PokemonType[];
}
export interface PokemonType {
  name: string;
}
