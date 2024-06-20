import React, { useContext, useEffect } from "react";
import PlanetsAndCharactersContext from '../hooks/PlanetsAndCharactersContext';
import { fetchCharacters } from "../services/fetchPlanetsAndCharacters";
import '../styles/Section.css';

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
            <h1>Loading...</h1> :
            (filteredCharacters && filteredCharacters.map((character) => (
              <article
                data-testid='character'
                className='character-item'
                key={character.created}
              >
                <img className='character-img'
                  alt='character'
                  src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`} />
                  <div className='character-text'>
                    <h4 className='character-name'>{character.name}</h4>
                    <h5 className='character-planet'>{planets
                      .find((planet) => planet.url === character.homeworld)?.name}</h5>
                    <p className='hidden-in-mobile'>Height • {character.height}</p>
                    <p className='hidden-in-mobile'>Mass • {character.mass}</p>
                    <p className='hidden-in-mobile'>Gender • {character.gender}</p>
                  </div>
              </article>
            )))
        }
      </div>
      <button
        className='load-button'
        disabled={!nextCharacterPage}
        onClick={handleClick}
      >
        LOAD MORE
      </button>
    </section>
  );
}

export default Section;
