import { Character } from "../../types";

interface CharacterCardProps {
  character: Character;
  picture: string;
}

const CharacterCard = ({
  character: { name, height, mass, created },
  picture,
}: CharacterCardProps): React.ReactElement => {
  return (
    <div className="character__card">
      <img
        className="character__picture"
        src={picture}
        alt={`Here you can see ${name}`}
        width="100"
        height="150"
      />
      <h2 className="character__name">{name}</h2>
      <span className="character__height">{height}</span>
      <span className="character__mass">{mass}</span>

      <span className="character__date">{created}</span>
    </div>
  );
};

export default CharacterCard;
