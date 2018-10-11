import { Controller , Get , Inject} from '@nestjs/common';
import { ForwardService } from './forward.service';
import { DogsService } from './dogs.service';
import { Dog } from './class.provider';


@Controller('dogs')
export class DogsController{

    constructor(
        private readonly dogsService: DogsService,
        @Inject('name') private readonly value: string,
        @Inject('dog') private readonly dog: Dog,
        @Inject('some') private readonly some: string,
        private readonly forwardService: ForwardService,
    ){}

    @Get('name')
    async getName(): Promise<string>{
        return this.dogsService.getName();
    }

    @Get('forward')
    async getForward(): Promise<string>{
        return this.forwardService.getName();
    }

    @Get('value')
    async getValue(): Promise<string>{
        return this.value;
    }

    @Get('class')
    async getClass(): Promise<string>{
        return this.some;
    }

}