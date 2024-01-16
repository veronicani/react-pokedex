
function Pokedex({ Pokemon }) {

  return (
    <div>
      {Pokemon.map(p => <div>
        <Pokecard id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience} />
      </div>)}
    </div>
  );

}