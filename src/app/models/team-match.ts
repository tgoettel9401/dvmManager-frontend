import { Game } from './game';

export interface TeamMatch {
  teamHome: string;
  teamAway: string;
  pointsTeamHome: number;
  pointsTeamAway: number;
  games: Game[];
}
