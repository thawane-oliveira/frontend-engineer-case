import React from 'react';
import PlanetsAndCharactersProvider from './hooks/PlanetsAndCharactersProvider';
import Header from './components/Header';


function App() {
  return (
    <PlanetsAndCharactersProvider>
      <Header />
      
    </PlanetsAndCharactersProvider>
  );
}

export default App;
