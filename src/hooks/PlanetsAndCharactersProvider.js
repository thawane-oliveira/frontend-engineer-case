import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {fetchCharacters, fetchPlanets} from '../services/fetchPlanetsAndCharacters';
import PlanetsAndCharactersContext from './PlanetsAndCharactersContext';

function PlanetsAndCharactersProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [newCharacterPage, setNewCharacterPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      const planets = await fetchPlanets();
      const characters = await fetchCharacters();

      setPlanets(planets);
      setCharacters(characters.characters);
      setNewCharacterPage(characters.newCharacterPage);
      setIsLoading(false);
    }
    fetchApi();
  }, []);

  const info = {
    planets,
    setPlanets,
    characters,
    setCharacters,
    newCharacterPage, 
    setNewCharacterPage,
    isLoading
  };

  return (
    <PlanetsAndCharactersContext.Provider value={info}>
      {children}
    </PlanetsAndCharactersContext.Provider>
  );
}

PlanetsAndCharactersContext.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetsAndCharactersProvider;
