import React, { useContext } from "react";
import PlanetsAndCharactersContext from '../hooks/PlanetsAndCharactersContext';

function Section() {
  const { characters, isLoading, planets } = useContext(PlanetsAndCharactersContext);
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
      <button>LOAD MORE</button>
    </>
  );
}

export default Section;
