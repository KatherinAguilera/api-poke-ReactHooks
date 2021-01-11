import noPokemon from '../images/noPokemon.jpg'

const Character = ({searchResults, isCharacterInFavorites, isFavorite, handleFavorite}) => {

    return (
      <div className="Characters">

      {searchResults.map((poke, i) => (
      <div id={poke.id} key={poke.id} >
        <div className='Character'>
          <img  src={poke.sprites.front_default} alt='pokemon' />
          <div>
            <p className="Character--name">{poke.name}</p>
            <p className="Character--type">Type: {poke.types[0].type.name}</p>
          </div>
          <button 
            className="Character--buttonFav" 
            type="button"
            onClick={() => handleFavorite(poke)} 
            >
              {!!isCharacterInFavorites(poke) ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
          </button>
          </div>
      </div>
      ))}
      {/* MOSTRAR CUANDO NO HAY RESULTADOS */}
      {searchResults.length===0 ?
      <div className="no-found">
        <article>
          <p>Don't found Pokemon :(</p>
        </article>
        <img src={noPokemon} alt="Pokeon no encontrado"/>
      </div>
      :null}
    </div>
    )
}

export default Character;