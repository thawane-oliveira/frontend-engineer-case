import { useContext } from "react";
import PlanetsAndCharactersContext from "../hooks/PlanetsAndCharactersContext";
import '../styles/Nav.css';

function Nav() {
  const { planets, selectedPlanet, setSelectedPlanet } = useContext(PlanetsAndCharactersContext);

  const handlePlanetChange = (value) => {
    setSelectedPlanet(value);
  };

  const handleClear = () => {
    setSelectedPlanet('all');
  };

  return (
    <nav className='nav-container'>
      <div className='filter-container'>
        <div className='select-container'>
          <label className='filter-label'>
            Filter By:
          </label>
          <select
            data-testid='planetFilter'
            className='filter-select'
            value={selectedPlanet}
            onChange={(e) => handlePlanetChange(e.target.value)}>
            <option
              value={'all'}
              className='filter-option'
            >All</option>
            {planets.map((planet) => (
              <option
                className='filter-option'
                key={planet.name}
                value={planet.name}>
                {planet.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className='filter-button'
          onClick={handleClear}
        >
          CLEAR ALL
        </button>
      </div>
    </nav>
  );
}

export default Nav;
