import { useState, useEffect } from 'react'
import '../css/Character.css'
import Loader from './Loader'
const Characters = () => {

  // const [characters, setCharacters] = useState([]);
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState('true');

  const arr = [];
  //en useEffect se pasa una Funcion anonima y variable que va a estar escuhando si no hay una variable sera un arreglo vacio
  // useEffect(()=> {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => setCharacters(data.results))
  // },[])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
    .then((response) => response.json())
    .then((data) => setResult(
    data.results.map((item) => {
    fetch(item.url)
    .then((response) => response.json())
    .then((allpokemon) => arr.push(allpokemon));
    setPoke(arr);
  }),
  ));
  }, []);
  setTimeout(() => {
    setLoad(false);
    }, 1000);

  return (
    <div className= "Characters">
    { load ? (
    <Loader />
    ) : (
    poke.map((img, i) => (
    <div id={img.id} key={img.id}>
      <div className='Character'>
        <img  src={img.sprites.front_default} alt='pokemon' />
      <div>
        <p className="Character--name">{img.name}</p>
        <p className="Character--type">Type: {img.types[0].type.name}</p>
      </div>
      </div>
    </div>
    ))
    )}
  </div>
  );
}

export default Characters;

