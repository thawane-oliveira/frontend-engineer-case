import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsAndCharacters from '../services/fetchPlanetsAndCharacters';
import PlanetsAndCharactersContext from './PlanetsAndCharactersContext';

function PlanetProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);


  useEffect(() => {
    async function fetchApi() {
      const data = await fetchPlanetsAndCharacters();
      setResult(data);
      setLoading(false);
    }
    fetchApi();
  }, []);

  const info = {
    loading, 
    setLoading,
    result,
    setResult
  };

  return (
    <PlanetsAndCharactersContext.Provider value={ info }>
      {children}
    </PlanetsAndCharactersContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetProvider;
