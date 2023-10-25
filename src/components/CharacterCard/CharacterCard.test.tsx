import { render, screen } from "@testing-library/react";
import CharacterCard from "./CharacterCard";

describe("Given a CharacterCard component", () => {
  describe("When it receives Luke Skywalker data", () => {
    test("Then it should show Luke's name", () => {
      const characterCard = {
        character: {
          name: "Luke Skywalker",
          height: "",
          mass: "",
          created: "",
        },
        picture: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
      };

      render(
        <CharacterCard
          character={characterCard.character}
          picture={characterCard.picture}
        />,
      );
      const title = screen.getByRole("heading", {
        name: characterCard.character.name,
      });
      expect(title).toBeInTheDocument();
    });
  });
  describe("When it receives Luke Skywalker data", () => {
    test("Then it should show Luke's name", () => {
      const characterCard = {
        character: {
          name: "Luke Skywalker",
          height: "",
          mass: "",
          created: "",
        },
        picture: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
      };

      render(
        <CharacterCard
          character={characterCard.character}
          picture={characterCard.picture}
        />,
      );
      const title = screen.getByRole("heading", {
        name: "Leia",
      });
      expect(title).toBeInTheDocument();
    });
  });
});
