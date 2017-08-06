// @flow

export type Player = {
  id: number,
  number: number,
  position: string,
  name: string,
  birth_date: string,
  teams: string,
  image: string,
  inactive: number,
};

export type Players = {
  starting: Array<Player>,
  substitute: Array<Player>,
};

export type Happening = {
  id: number,
  match_id: number,
  minute?: number,
  happening?: string,
  description?: string,
  hometeam?: number,
  scorer_id?: number,
  scorer?: string,
  assist_id?: number,
  assist?: string,
};
