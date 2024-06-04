import { Player } from 'src/players/entities/player.entity';
export class Result {
  constructor(
    public id: number,
    public winner: Player,
    public loser: Player,
    public winnerScore: number,
    public loserScore: number,
  ) {}
}
