import { Character, CharactersResponse } from "./types";

const getCharacters = async (): Promise<Character[]> => {
  const charactersUrl = "https://swapi.dev/api/people";

  try {
    const response = await fetch(charactersUrl);
    const characters = (await response.json()) as CharactersResponse;

    console.log(characters.results);
    return characters.results;
  } catch {
    throw new Error("Error fetching data from Star Wars API");
  }
};

export default getCharacters;
