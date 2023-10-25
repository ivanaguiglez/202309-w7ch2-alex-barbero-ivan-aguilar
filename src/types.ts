export interface CharactersResponse {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  height: string;
  mass: string;
  created: string;
}
