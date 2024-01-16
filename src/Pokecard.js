const BASE_POKE_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Renders a single pokemon, with their name, image, and type.
 * Accepts, via props, a pokemon object: {id, name, type, base_experience}
*/
function Pokecard({id, name, type, base_experience}) {
  
  return (
    <div>
      <h2>{name}</h2>
      <img src={ BASE_POKE_IMG_URL + id + '.png' } alt={name} />
      <div>
        <span>Type: {type}</span><br/>
        <span>EXP: {base_experience}</span>
      </div>
    </div>
  );
}


export default Pokecard;