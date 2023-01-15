import { Pokemon, PokemonType } from '../../../models/Pokemon';
import './styles.css';

interface Props {
  pokemon: Pokemon;
}

export function PokedexItem(props: Props) {
  const getPokemonTypeClassNames = (type: PokemonType) => `pokemon-type ${type.name.toLowerCase()}`;
  const formatPokemonName = (name: string) => name.split('-')[0];
  return (
    <div className='pokedex-item-wrapper'>
      <div className='pokedex-item'>
        <div className='species-name'>
          #{props.pokemon.num}. {formatPokemonName(props.pokemon.species)}
        </div>
        <img className='pokemon-sprite' src={props.pokemon.sprite} />
        <div className='pokemon-types-wrapper'>
          {props.pokemon.types.map((type) => (
            <div key={type.name} className={getPokemonTypeClassNames(type)}>
              {type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
