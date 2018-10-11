import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cat/cats.module';
import { DogsModule } from './dog/dogs.module';

@Module({
  imports: [CatsModule,DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
