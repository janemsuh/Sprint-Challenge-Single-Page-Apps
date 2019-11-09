import React from "react";

export default function EpisodeCard({ episode }) {

  return (
    <div className='episode-card'>
      <h2>Episode Name: {episode.name}</h2>
      <p>Episode: {episode.episode}</p>
      <p>Aired: {episode.air_date}</p>
    </div>
  );
};