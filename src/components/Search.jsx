import  React  from 'react';
import '../css/Search.css';


  const Search = ({searchTerm, searchInput, handleSearch}) => {
    return (
      <div className="search">
      <span>
        <input className="searchTerm" id="element" type="text" placeholder="Busca tu pokemon!"  value={searchTerm}
          onChange={handleSearch} ref={searchInput}/>
          <label htmlFor="element">Pokemón</label>
      </span>


    </div>
    );
  }


  export default Search;