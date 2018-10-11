import { Controller , Get , Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    async root(){
        return 'this is cats controller';
    }

}
