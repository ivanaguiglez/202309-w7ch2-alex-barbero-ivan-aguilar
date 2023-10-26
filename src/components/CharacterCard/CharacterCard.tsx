import { Character } from "../../types";
import "./CharacerCard.css";

interface CharacterCardProps {
  character: Character;
  picture: string;
}

const CharacterCard = ({
  character: { name, height, mass, created },
  picture,
}: CharacterCardProps): React.ReactElement => {
  return (
    <div className="character-card">
      <img
        className="character-card__picture"
        src={picture}
        alt={`Here you can see ${name}`}
        width="100"
        height="166"
      />
      <h2 className="character-card__title">{name}</h2>
      <span className="character-card__data">
        Height: <span className="character-card__data-value">{height}</span>
      </span>
      <span className="character-card__data">
        Mass: <span className="character-card__data-value">{mass} </span>
      </span>
      <span className="character-card__data character-card__data--date ">
        Date: <span className="character-card__data-value">{created}</span>
      </span>
    </div>
  );
};

export default CharacterCard;
