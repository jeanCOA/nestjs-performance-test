import { Player } from 'src/players/entities/player.entity';
export class Tournament {
  constructor(
    public id: number,
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public participants: Player[],
  ) {}
}
