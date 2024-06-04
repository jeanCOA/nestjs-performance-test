import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  createRandomPlayer(): Player | PromiseLike<Player> {
    throw new Error('Method not implemented.');
  }
  assignRandomPlayersToTournament(arg0: number) {
    throw new Error('Method not implemented.');
  }
  registerResults(resultsDto: ResultsDto) {
    throw new Error('Method not implemented.');
  }
  getPlayersByTournament(arg0: number, minScore: number, sortBy: string, page: number, perPage: number): Player[] | PromiseLike<Player[]> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async create(playerData: Partial<Player>): Promise<Player> {
    const player = this.playerRepository.create(playerData);
    return await this.playerRepository.save(player);
  }

  async findAll(): Promise<Player[]> {
    return await this.playerRepository.find();
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playerRepository.findOneBy({ id });
    if (!player) {
      throw new NotFoundException(`Player #${id} not found`);
    }
    return player;
  }

  async update(id: number, playerData: Partial<Player>): Promise<Player> {
    const player = await this.findOne(id);
    this.playerRepository.merge(player, playerData);
    return await this.playerRepository.save(player);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playerRepository.remove(player);
  }
}


