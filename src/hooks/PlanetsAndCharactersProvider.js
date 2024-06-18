import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters, fetchPlanets } from '../services/fetchPlanetsAndCharacters';
import PlanetsAndCharactersContext from './PlanetsAndCharactersContext';

function PlanetsAndCharactersProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [nextCharacterPage, setNextCharacterPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('all');
  const [orderedPlanets, setOrderedPlanets] = ([]);

  useEffect(() => {
    async function fetchApi() {
      const planetsResult = await fetchPlanets();
      const charactersResult = await fetchCharacters();

      setPlanets(planetsResult.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }));
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
    orderedPlanets,
    setOrderedPlanets,
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
