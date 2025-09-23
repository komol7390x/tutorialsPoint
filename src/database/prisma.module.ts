import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.db';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
