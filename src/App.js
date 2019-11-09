import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import LocationsList from './components/LocationsList';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/episodes' component={EpisodeList} />
      <Route path='/locations' component={LocationsList} />
    </main>
  )
}
