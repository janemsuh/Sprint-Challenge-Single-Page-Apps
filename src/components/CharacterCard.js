import React from "react";

export default function CharacterCard({ character }) {
  // return <span>todo: character</span>;
  return (
    <div className='character-card'>
      <h2>Known As: {character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>From: {character.origin.name}</p>
      <p>Last Seen: {character.location.name}</p>
    </div>
  );
};
