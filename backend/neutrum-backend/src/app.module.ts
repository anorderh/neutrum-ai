import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BiasModule } from './bias/bias.module';

@Module({
  imports: [BiasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
