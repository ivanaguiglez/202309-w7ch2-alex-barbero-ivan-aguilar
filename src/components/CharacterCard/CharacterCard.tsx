interface CharacterCardProps {
  name: string;
  height: string;
  mass: string;
  date: string;
  picture: string;
}

const CharacterCard = ({
  name,
  height,
  mass,
  date,
  picture,
}: CharacterCardProps): React.ReactElement => {
  return (
    <div className="character__card">
      <img
        className="caharacter__picture"
        src={picture}
        alt={`Here you can see ${name}`}
        width="100"
        height="150"
      />
      <h2 className="character__name">{name}</h2>
      <span className="character__height">{height}</span>
      <span className="character__mass">{mass}</span>
      <span className="character__date">{date}</span>
    </div>
  );
};

export default CharacterCard;
