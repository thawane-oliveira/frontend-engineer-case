const fetchPlanetsAndCharacters = async () => {
  try {
    const planetUrl = fetch('https://swapi.dev/api/planets/');
    const characterUrl = fetch('https://swapi.dev/api/people/');

    const [planetResults, charactersResults] = await Promise.all([planetUrl, characterUrl]);

    const planets = await planetResults.json();
    const characters = await charactersResults.json();

    return { planets, characters };
  } catch (error) {
    console.error('Sentimos muito, mas a requisição falhou:', error);
  }
};

export default fetchPlanetsAndCharacters;
