import { useEffect, useState } from "react";
import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = async (): Promise<void> => {
    const charactersUrl =
      "https://starwars-characters-api-qcun.onrender.com/characters";

    try {
      const response = await fetch(charactersUrl);
      const charactersData = (await response.json()) as Character[];

      setCharacters(charactersData);
    } catch {
      throw new Error("Error fetching data from Star Wars API");
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="main-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
        alt="star wars main title"
        width="300"
        height="200"
      />
      <ul className="characters">
        {characters.map((character) => (
          <li className="characters__item" key={character.id}>
            <CharacterCard
              character={character}
              picture={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
