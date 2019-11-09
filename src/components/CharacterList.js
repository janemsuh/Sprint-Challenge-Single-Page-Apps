import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setCharacters(res.data.results)
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    getCharacters();
  }, []);

  function onSearch(searchTerms) {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchTerms.name}`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('Search error is ', err)
      });
  }

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <SearchForm onSearch={onSearch} />
      {characters.map(character => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}
