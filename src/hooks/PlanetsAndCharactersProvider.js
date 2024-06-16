import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {fetchCharacters, fetchPlanets} from '../services/fetchPlanetsAndCharacters';
import PlanetsAndCharactersContext from './PlanetsAndCharactersContext';

function PlanetsAndCharactersProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [nextCharacterPage, setNextCharacterPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('all');

  useEffect(() => {
    async function fetchApi() {
      const planetsResult = await fetchPlanets();
      const charactersResult = await fetchCharacters();

      setPlanets(planetsResult);
      setCharacters(charactersResult.characters);
      setFilteredCharacters(charactersResult.characters);
      setNextCharacterPage(charactersResult.nextPage);
      setIsLoading(false);
    }
    fetchApi();
  }, []);

  const info = {
    planets,
    setPlanets,
    characters,
    setCharacters,
    nextCharacterPage, 
    setNextCharacterPage,
    filteredCharacters,
    setFilteredCharacters,
    selectedPlanet,
    setSelectedPlanet,
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
