import { useState } from "react";
import { Character, CharactersResponse } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = async (): Promise<void> => {
    const charactersUrl = "https://swapi.dev/api/people";

    try {
      const response = await fetch(charactersUrl);
      const charactersData = (await response.json()) as CharactersResponse;

      setCharacters(charactersData.results);
    } catch {
      throw new Error("Error fetching data from Star Wars API");
    }
  };

  getCharacters();

  return (
    <div className="main-container">
      <ul className="characters">
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
