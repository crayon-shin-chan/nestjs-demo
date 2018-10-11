import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { NameProvider } from './value.provider';
import { DogProvider } from './class.provider';
import { SomeProvider } from './factory.provider';
import { ForwardService } from './forward.service';

@Module({
    controllers: [DogsController],
    providers: [DogsService, ForwardService, NameProvider, DogProvider, SomeProvider],
})
export class DogsModule {}