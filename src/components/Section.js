import React, { useContext, useEffect } from "react";
import PlanetsAndCharactersContext from '../hooks/PlanetsAndCharactersContext';
import { fetchCharacters } from "../services/fetchPlanetsAndCharacters";

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
    <>
      <h2>All Characters</h2>
      <div className="characterContainer">
        {
          isLoading ?
            <p>Loading...</p> :
            (filteredCharacters && filteredCharacters.map((character) => (
              <article className="characterItem" key={character.created}>
                <img className="characterImg"
                  alt="character"
                  src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`} />
                <p className="characterText">{character.name}</p>
                <p>{planets
                  .find((planet) => planet.url === character.homeworld)?.name}</p>
                <p>Height • {character.height}</p>
                <p>Mass • {character.mass}</p>
                <p>Gender • {character.gender}</p>
              </article>
            )))
        }
      </div>
      <button disabled={!nextCharacterPage} onClick={handleClick}>LOAD MORE</button>
    </>
  );
}

export default Section;
