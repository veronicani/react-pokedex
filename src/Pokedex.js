import Pokecard from "./Pokecard";

/** Pokedex: Renders a sequence of Pokecard components from an array of pokemon.
 * Accepts, via props, an array of pokemon objects.
 *    [{id, name, type, base_experience}, ...]
*/
function Pokedex({ pokemon }) {

  return (
    <div>
      {pokemon.map(({id, name, type, base_experience}) => 
        <Pokecard id={id}
          name={name}
          type={type}
          base_experience={base_experience} />
      )}
    </div>
  );
}

export default Pokedex;