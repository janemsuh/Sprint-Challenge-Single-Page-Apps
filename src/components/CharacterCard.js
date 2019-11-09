import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  width: 50%;
  background: lightyellow;
  padding: 2%;
  border: 2px double yellow;
  margin: 2%;
  border-radius: 5px;
  text-align: center;
`

const H2 = styled.h2`
  color: blue;
`

const Fact = styled.p`
  text-decoration: underline black double;
`

export default function CharacterCard({ character }) {
  // return <span>todo: character</span>;
  return (
    <Card className='character-card'>
      <H2>{character.name}</H2>
      <img src={character.image} alt={character.name} />
      <Fact>Status: {character.status}</Fact>
      <Fact>From: {character.origin.name}</Fact>
      <Fact>Last Seen: {character.location.name}</Fact>
    </Card>
  );
};
