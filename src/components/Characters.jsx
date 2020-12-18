import { useState, useEffect } from 'react'
import '../css/Character.css'

const Characters = () => {

  const [characters, setCharacters] = useState([]);

  //en useEffect se pasa una Funcion anonima y variable que va a estar escuhando si no hay una variable sera un arreglo vacio
  useEffect(()=> {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  },[])
  return (
    <div className= "Characters">
      {characters.map(character => (
        <div className="Character">
          <img src={character.image} alt="Personajes"/>
          <h2>{character.name}</h2>
          <p>{character.species}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;

