const fetchCharacters = async (url = 'https://swapi.dev/api/people/?page=1') => {
  try {
    const characterUrl = await fetch(url);
    const characters = await characterUrl.json();

      return { characters: characters.results, nextPage: characters.next };

  } catch (error) {
    console.error('Sentimos muito, mas a requisição falhou:', error);
  }
};


const fetchPlanets = async (previousPlanets = [], url = 'https://swapi.dev/api/planets/') => {
  try {
    const planetUrl = await fetch(url);
    const planets = await planetUrl.json();

    const nextPlanets = [...previousPlanets, ...planets.results];

    if (planets.next) {
      return fetchPlanets(nextPlanets, planets.next);
    }

    return nextPlanets;

  } catch (error) {
    console.error('Sentimos muito, mas a requisição falhou:', error);
  }
};

export { fetchPlanets, fetchCharacters };
