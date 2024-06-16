import { useContext } from "react";
import PlanetsAndCharactersContext from "../hooks/PlanetsAndCharactersContext";

function Nav() {
  const { planets, selectedPlanet, setSelectedPlanet } = useContext(PlanetsAndCharactersContext);

  const handlePlanetChange = (value) => {
    setSelectedPlanet(value);
  };

  const handleClear = () => {
    setSelectedPlanet('all');
  };

  return (
    <>
      <div>
        <label>
          Filter By:
          <select
            value={selectedPlanet}
            onChange={(e) => handlePlanetChange(e.target.value)}>
            <option value={'all'}>All</option>
            {planets.map((planet) => (
              <option key={planet.name} value={planet.name}>
                {planet.name}
              </option>
            ))}
          </ select >
        </label>
      </div>
      <button onClick={handleClear}>CLEAR ALL</button>
    </>
  );
}

export default Nav;
