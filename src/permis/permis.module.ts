import { Module } from '@nestjs/common';
import { PermisService } from './permis.service';
import { PermisController } from './permis.controller';

@Module({
  controllers: [PermisController],
  providers: [PermisService],
})
export class PermisModule {}
