import { Injectable , Inject , forwardRef} from '@nestjs/common';
import { DogsService } from './dogs.service';

@Injectable()
export class ForwardService{

    constructor(
        @Inject(forwardRef(() => DogsService)) private readonly dogsService: DogsService,
    ){}

    /** 可以循环引用不能循环调用 */
    async getName(): Promise<string>{
        return this.dogsService.getName();
    }

}