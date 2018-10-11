import { Injectable , Inject , forwardRef } from '@nestjs/common';
import { ForwardService } from './forward.service';

@Injectable()
export class DogsService{

    constructor(
        @Inject(forwardRef(()=> ForwardService)) private readonly forwardService: ForwardService,
    ){}

    async getName(): Promise<string>{
        return 'my dog name is hehe';
    }

}