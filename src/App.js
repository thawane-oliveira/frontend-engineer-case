import React from 'react';
import PlanetsAndCharactersProvider from './hooks/PlanetsAndCharactersProvider';

function App() {
  return (
    <PlanetsAndCharactersProvider>
      <h1>Oie</h1>
    </PlanetsAndCharactersProvider>
  );
}

export default App;
