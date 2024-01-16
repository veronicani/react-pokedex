import Pokecard from "./Pokecard";

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