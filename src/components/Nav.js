import { useContext } from "react";
import PlanetsAndCharactersContext from "../hooks/PlanetsAndCharactersContext";

function Nav() {
  const { planets } = useContext(PlanetsAndCharactersContext);
  return (
    <>
      <div>
        <label>
          Filter By:
          <select>
            <option>All</option>
            {planets.map((planet) => (
              <option key={planet.name} value={planet.name}>
                {planet.name}
              </option>
            ))}
          </ select >
        </label>
      </div>
      <button>CLEAR ALL</button>
    </>
  );
}

export default Nav;
