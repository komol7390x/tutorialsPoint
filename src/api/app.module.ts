import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [GameModule, PrismaModule],
})
export class AppModule {}
