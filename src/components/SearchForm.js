import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [searchTerms, setSearchTerms] = useState({ name: '' });

  const handleChange = event => {
    setSearchTerms({ ...searchTerms, [event.target.name]: event.target.value })
  };
 
  return (
    <section className="search-form">
     {/* // Add a search form here */}
      <form onSubmit={() => onSearch(searchTerms)}>
        <input
          name='name'
          placeholder='Search by name'
          value={searchTerms.name}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  );
}
