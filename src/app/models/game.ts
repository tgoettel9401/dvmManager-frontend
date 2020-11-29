export interface Game {
  boardNumber: number;
  playerHome: string;
  playerAway: string;
  playerHomeColor: string;
  playerAwayColor: string;
  result: string;
  liChessGameId: string;
  liChessGameStatus: string;
  liChessGameMoves: string;
  liChessGameCreatedAt: string;
  liChessGameLastMoveAt: string;
}
