import React from 'react';
import PlanetsAndCharactersProvider from './hooks/PlanetsAndCharactersProvider';
import Header from './components/Header';
import Nav from './components/Nav';


function App() {
  return (
    <PlanetsAndCharactersProvider>
      <Header />
      <Nav />
    </PlanetsAndCharactersProvider>
  );
}

export default App;
