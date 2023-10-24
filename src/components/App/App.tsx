import { useEffect, useState } from "react";
import { Character, CharactersResponse } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async (): Promise<Character[]> => {
      const charactersUrl = "https://swapi.dev/api/people";

      try {
        const response = await fetch(charactersUrl);
        const charactersData = (await response.json()) as CharactersResponse;

        setCharacters(charactersData.results);
        return charactersData.results;
      } catch {
        throw new Error("Error fetching data from Star Wars API");
      }
    };

    getCharacters();
  }, []);

  return (
    <div>
      <ul>
        {characters.map((character, id) => (
          <li key={id + 1}>
            <CharacterCard
              character={character}
              picture={`https://starwars-visualguide.com/assets/img/characters/${
                id + 1
              }.jpg`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
