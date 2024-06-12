const fetchCharacters = async (url = 'https://swapi.dev/api/people/?page=1') => {
  try {
    const characterUrl = await fetch(url);

    const characters = await characterUrl.json();

    return { characters: characters.results, newCharacterPage: characters.next };
  } catch (error) {
    console.error('Sentimos muito, mas a requisição falhou:', error);
  }
};

const fetchPlanets = async (oldPlanets = [], url = 'https://swapi.dev/api/planets/') => {
  try {
    const planetUrl = await fetch(url);
    const planets = await planetUrl.json();
    const newPlanets = [...oldPlanets, ...planets.results];
    if(planets.next) {
      return fetchPlanets(newPlanets, planets.next);
    }

    return newPlanets;
  } catch (error) {
    console.error('Sentimos muito, mas a requisição falhou:', error);
  }
};

export { fetchPlanets, fetchCharacters };
