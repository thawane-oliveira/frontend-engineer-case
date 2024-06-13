import React, { useContext } from "react";
import PlanetsAndCharactersContext from '../hooks/PlanetsAndCharactersContext';
import { fetchCharacters } from "../services/fetchPlanetsAndCharacters";

function Section() {
  const { characters, isLoading, planets, nextCharacterPage, setNextCharacterPage, setCharacters } = useContext(PlanetsAndCharactersContext);

  const handleClick = async () => {
    const result = await fetchCharacters(nextCharacterPage);
    setNextCharacterPage(result.nextPage);
    const newCharacters = [...characters, ...result.characters];
    setCharacters(newCharacters);
  }

  return (
    <>
      <h2>All Characters</h2>
      <div className="characterContainer">
        {
          isLoading ?
            <p>Loading...</p> :
            (characters && characters.map((character) => (
              <article className="characterItem" key={character.created}>
                <img className="characterImg"
                  alt="teste"
                  src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`} />
                <p className="characterText">{character.name}</p>
                <p>{planets
                  .find((planet) => planet.url === character.homeworld)?.name}</p>
                <p>{character.height}</p>
                <p>{character.mass}</p>
                <p>{character.gender}</p>
              </article>
            )))
        }
      </div>
      <button disabled={!nextCharacterPage} onClick={handleClick}>LOAD MORE </button>
    </>
  );
}

export default Section;
