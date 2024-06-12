import React from 'react';
import PlanetsAndCharactersProvider from './hooks/PlanetsAndCharactersProvider';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import './App.css';


function App() {
  return (
    <PlanetsAndCharactersProvider>
      <Header />
      <Nav />
      <Section />
    </PlanetsAndCharactersProvider>
  );
}

export default App;
