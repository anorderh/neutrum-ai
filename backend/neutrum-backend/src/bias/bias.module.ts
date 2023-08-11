import { Module } from '@nestjs/common';
import { BiasController } from './bias.controller';
import { BiasService } from './bias.service';

@Module({
    controllers: [BiasController],
    providers: [BiasService]
})

export class BiasModule {}
