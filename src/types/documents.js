// @flow

export type MatchInfo = {
  id: number,
  season_id: number,
  hometeam_id: string,
  awayteam_id: string,
  start_time: string,
  venue?: string,
  ref?: string,
  a_ref1?: string,
  a_ref2?: string,
  spectators?: string,
  star3_id?: number,
  star2_id?: number,
  star1_id?: number,
};

export type PlayerTeamStatistics = {
  starting: number,
  sub: number,
  goals: number,
  assists: number,
  points: number,
  yellow_cards: number,
  yellowred_cards: number,
  red_cards: number,
  stars: number,
};

export type Player = {
  id: number,
  number: number,
  position: string,
  name: string,
  birth_date: string,
  teams: string,
  image: string,
  inactive: number,
  ateam?: PlayerTeamStatistics,
  bteam?: PlayerTeamStatistics,
};

export type Lineups = {
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
