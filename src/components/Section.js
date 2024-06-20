import React, { useContext, useEffect } from "react";
import PlanetsAndCharactersContext from '../hooks/PlanetsAndCharactersContext';
import { fetchCharacters } from "../services/fetchPlanetsAndCharacters";
import '../styles/Section.css';
import Loading from "./Loading";

function Section() {
  const {
    isLoading,
    planets,
    nextCharacterPage, setNextCharacterPage,
    characters, setCharacters,
    filteredCharacters, setFilteredCharacters,
    selectedPlanet,
  } = useContext(PlanetsAndCharactersContext);

  const handleClick = async () => {
    const result = await fetchCharacters(nextCharacterPage);
    setNextCharacterPage(result.nextPage);
    const newCharacters = [...characters, ...result.characters];
    setCharacters(newCharacters);
  };

  useEffect(() => {
    if (selectedPlanet === 'all') {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((character) => {
        const characterPlanet = planets.find((planet) => planet.url === character.homeworld)?.name;
        return characterPlanet === selectedPlanet;
      });
      setFilteredCharacters(filtered);
    }
  }, [selectedPlanet, characters, planets, setFilteredCharacters]);

  return (
    <section className='section-container'>
      <h2 className='section-title'>All Characters</h2>
      <div className='character-container'>
        {
          isLoading ?
            <Loading /> :
            (filteredCharacters && filteredCharacters.map((character, index) => (
              <article
                data-testid='character'
                className='character-item'
                key={character.created}
              >
                <img className='character-img'
                  alt='character'
                  src={`https://picsum.photos/500/250?random=${index}`} />
                <div className='character-text'>
                  <h4 className='character-name'>{character.name}</h4>
                  <h5 className='character-planet'>{planets
                    .find((planet) => planet.url === character.homeworld)?.name}</h5>
                  <p className='hidden-in-mobile'>HEIGHT <span className='caractere'>•</span> {character.height.toUpperCase()}</p>
                  <p className='hidden-in-mobile'>MASS <span className='caractere'>•</span> {character.mass.toUpperCase()}</p>
                  <p className='hidden-in-mobile'>GENDER <span className='caractere'>•</span> {character.gender.toUpperCase()}</p>
                </div>
              </article>
            )))
        }
      </div>
      <div className='load-div'>
        <button
          className='load-button'
          disabled={!nextCharacterPage}
          onClick={handleClick}
        >
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default Section;
