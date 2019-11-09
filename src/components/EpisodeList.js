import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          setEpisodes(res.data.results)
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    getEpisodes();
  }, []);

  return (
    <section className="episode-list">
      {episodes.map(episode => (
        <EpisodeCard episode={episode} />
      ))}
    </section>
  );
}
