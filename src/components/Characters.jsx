import { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react'
import '../css/Character.css'
import '../css/Search.css';
import Loader from './Loader'
import Search from './Search';
import Character from './Character'
/**************useReducer*************/
const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      case 'REMOVE_FROM_FAVORITES':
			return {
				...state,
				favorites: [
					...state.favorites.filter((favorite) => favorite !== action.payload),
				],
			};
    default:
      return state;
  }
}



const Characters = () => {

  const [result, setResult] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [load, setLoad] = useState('true');
  const [myfavorites, dispatch] = useReducer(favoriteReducer, initialState)
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);

  /**************useREf************************/
  const searchInput = useRef(null);

  /******* useEffect y useref PARA BUSCADOR ********/
  const handleSearch = useCallback(() => {
    setSearchTerm(searchInput.current.value);
  });
  useEffect(() => {
    const results = searchResults.filter((person) => person.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
    if (searchTerm === '') {
      setSearchResults(pokemons);
    }
  }, [searchTerm]);

/******** BUSCADOR CON USE MEMO***********/
//   const filteredUsers = useMemo(() =>
//   pokemons.filter((user) => {
//     return user.name.toLowerCase().includes(searchTerm.toLowerCase());
//   }),
//   [pokemons, searchTerm]
// )


  /****** USE EFFECT En useEffect se pasa una Funcion anonima y variable que va a estar escuhando si no hay una variable sera un arreglo vacio****/
  const arr = [];
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
    .then((response) => response.json())
    .then((data) => setResult(
    data.results.map((item) => {
      fetch(item.url)
      .then((response) => response.json())
      .then((allpokemon) => arr.push(allpokemon));
      setPokemons(arr);
      setSearchResults(arr);
      dispatch(arr)
      return item.url;
    }),
  ));
  }, []);
  setTimeout(() => {
    setLoad(false);
    }, 1000);

    const handleFavorite = favorite => {
      // dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
      dispatch({
        type: !!isCharacterInFavorites(favorite)
          ? 'REMOVE_FROM_FAVORITES'
          : 'ADD_TO_FAVORITE',
        payload: favorite,
      });
    }

    // Remover favorito
    const isCharacterInFavorites = (favorite) =>
      myfavorites.favorites.find((character, key) => character.id === favorite.id );
    return (
      <>
        <Search searchTerm={searchTerm} searchInput={searchInput} handleSearch={handleSearch} />
      {/* BUSCADOR CON uSEMEMO */}
      {/* <div className="Search">
        <input type="text" value={searchTerm} onChange={handleChange} />
      </div> */}
      {/*
        {filteredUsers.map(character => (
          <div className="item" key={character.id}>
            <h2>{character.name}</h2>
            <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
          </div>
        ))} */}
      <div className= "">
      { load ? (
      <Loader />
      ) : (
        <>
          <div className='Characters__favorites'>
          <p className="Character__title">Pokemones favoritos:</p>

            {myfavorites.favorites.map(favorite => (
              <>
                <div key={favorite.id} >
                  <div className='Characters--favorite'>
                    <img  src={favorite.sprites.front_default} alt='pokemon' />
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* LISTADO Y FILTRO DE POKEMONES */}
          <Character searchResults={searchResults} isFavorite={true} isCharacterInFavorites={isCharacterInFavorites} handleFavorite={handleFavorite} />
        </>
      )}
    </div>
    </>
  );
}

export default Characters;

// import React, { useState, useEffect, useReducer } from 'react';

// const initialState = {
//   favoritesj: []
// }

// const favoriteReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_FAVORITE':
//       return {
//         ...state,
//         favoritesj: [...state.favoritesj, action.payload]
//       };
//     default:
//       return state;
//   }
// }

// const Characters = () => {
//   const [characters, setCharacters] = useState([]);
//   const [myfavorites, dispatch] = useReducer(favoriteReducer, initialState);

//   useEffect(() => {
//     fetch('https://rickandmortyapi.com/api/character/')
//       .then(response => response.json())
//       .then(data => setCharacters(data.results));
//   }, []);

//   const handleClick = favorite => {
//     dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
//   }

//   return (
//     <div className="Characters">

//       {myfavorites.favoritesj.map(favorite => (
//         <li key={favorite.id}>
//           {favorite.name}
//         </li>
//       ))}

//       {characters.map(character => (
//         <div className="item" key={character.id}>
//           <h2>{character.name}</h2>
//           <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Characters;