import React from 'react';
import { FaSearch } from "react-icons/fa";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Buscar produtos..." 
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>
      <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
