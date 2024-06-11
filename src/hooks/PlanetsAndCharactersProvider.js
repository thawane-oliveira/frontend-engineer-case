import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsAndCharacters from '../services/fetchPlanetsAndCharacters';
import PlanetsAndCharactersContext from './PlanetsAndCharactersContext';

function PlanetsAndCharactersProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const data = await fetchPlanetsAndCharacters();
      setPlanets(data.planets);
      setCharacters(data.characters);
      }
      fetchApi();
  }, []);

  const info = {
    planets,
    setPlanets,
    characters,
    setCharacters
  };

  return (
    <PlanetsAndCharactersContext.Provider value={ info }>
      {children}
    </PlanetsAndCharactersContext.Provider>
  );
}

PlanetsAndCharactersContext.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetsAndCharactersProvider;
