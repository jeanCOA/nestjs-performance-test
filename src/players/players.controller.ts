import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PlayerService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { ResultsDto } from '../results/dto/results.dto'; // Ajusta la ruta según la ubicación real de ResultsDto

@Controller('players') // Ruta base para todas las rutas de jugadores
export class PlayersController {
  constructor(private readonly playersService: PlayerService) {}

  @Get()
  async getAllPlayers(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Get(':id') // Ruta GET para consultar un jugador por ID
  async getPlayerById(@Param('id') id: string): Promise<Player> {
    return this.playersService.findOne(parseInt(id, 10));
  }

  @Post() // Ruta POST para registrar un nuevo jugador
  async createPlayer(@Body() playerDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.create(playerDto);
  }

  @Put(':id') // Ruta PUT para actualizar un jugador existente
  async updatePlayer(
    @Param('id') id: string,
    @Body() playerDto: UpdatePlayerDto,
  ): Promise<Player> {
    return this.playersService.update(parseInt(id, 10), playerDto);
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string): Promise<void> {
    await this.playersService.remove(parseInt(id, 10));
  }

  @Post('random')
  async createRandomPlayer(): Promise<Player> {
    return this.playersService.createRandomPlayer();
  }

  @Post('random-assignment/:tournamentId')
  async assignRandomPlayersToTournament(
    @Param('tournamentId') tournamentId: string,
  ): Promise<void> {
    await this.playersService.assignRandomPlayersToTournament(
      parseInt(tournamentId, 10),
    );
  }

  @Post('results')
  async registerResults(@Body() resultsDto: ResultsDto): Promise<void> {
    await this.playersService.registerResults(resultsDto);
  }

  @Get(':tournamentId/players')
  async getPlayersByTournament(
    @Param('tournamentId') tournamentId: string,
    @Query('minScore') minScore?: number,
    @Query('sortBy') sortBy?: string,
    @Query('page') page?: number,
    @Query('perPage') perPage?: number,
  ): Promise<Player[]> {
    return this.playersService.getPlayersByTournament(
      parseInt(tournamentId, 10),
      minScore,
      sortBy,
      page,
      perPage,
    );
  }
}
  