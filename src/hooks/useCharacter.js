import {useState, useEffect} from 'react'

const useCharacter = api => {

  const [result, setResult] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [load, setLoad] = useState('true');

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
      return item.url;
    }),
  ));
  }, [api]);
  setTimeout(() => {
    setLoad(false);
    }, 1000);

}

export default useCharacter;