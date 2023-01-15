import { Pokemon, PokemonType } from '../../../models/Pokemon';
import './styles.css';

interface Props {
  pokemon: Pokemon;
}

export function PokedexItem(props: Props) {
  const getPokemonTypeClassNames = (type: PokemonType) => `pokemon-type ${type.name.toLowerCase()}`;
  return (
    <div className='pokedex-item-wrapper'>
      <div className='pokedex-item'>
        <div className='header'>
          <div className='species-name'>
            #{props.pokemon.num}. {props.pokemon.species}
          </div>
          <img className='pokemon-sprite' src={props.pokemon.sprite} />
        </div>
        <div className='footer'>
          <div className='pokemon-types-wrapper'>
            {props.pokemon.types.map((type) => (
              <div key={type.name} className={getPokemonTypeClassNames(type)}>
                {type.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
