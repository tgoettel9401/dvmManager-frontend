import { Game } from './game';

export interface TeamMatch {
  teamHome: string;
  teamAway: string;
  result: string;
  games: Game[];
}
