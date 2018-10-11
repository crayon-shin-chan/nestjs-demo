import { Controller , Get , Post , Param , Query , Headers , Body , Session , Req , Res , HttpCode , Header} from '@nestjs/common';
import { Request , Response } from 'express';
import { of, Observable } from 'rxjs';

@Controller('cats')
export class CatsController {

    @Get()
    async root(){
        return 'this is cats controller';
    }

    /** 可以直接返回Observable对象，此时函数不是async */
    @Get('observable')
    getObservable(): Observable<string>{
        return of('hehe');
    }

    /** 通配符路径 */
    @Get('ab*')
    async ab(@Req() req: Request): Promise<string>{
        return `this req url is ${req.url}`;
    }

    @Get('id/:id')
    async getById(@Param('id') id: string): Promise<string>{
        return `this cat id is ${id}`;
    }

    /** 查询参数都解析为字符串 */
    @Get('all')
    async getAll(@Query() query: any): Promise<string>{
        return `this query is ${JSON.stringify(query)}`;
    }

    /** 头信息键名都是小写 */
    @Get('headers')
    async getHeaders(@Headers() headers: any): Promise<string>{
        return `this headers is ${JSON.stringify(headers)}`;
    }

    /** session貌似需要额外配置,直接获取为undefined */
    @Get('session')
    async getSession(@Session() session: any): Promise<string>{
        return `this session is ${session}`;
    }

    @Get('req')
    async getReq(@Req() req: Request): Promise<string>{
        return `this req url is ${JSON.stringify(req.url)}`;
    }

    @Get('res')
    async getRes(@Res() res: Response): Promise<void>{
        res.end(`this res return value`);
    }

    /** Body可以接收到json请求体，也可以接收表单请求体，其中json请求体需要设置content-type，否则为空，无法接收form-data请求 */
    @Post('body')
    async getBody(@Body() body: any): Promise<string>{
        return `this body is ${JSON.stringify(body)}`;
    }

    /** 设置响应码，204为请求成功，但是不返回数据 */
    @Post('statusCode')
    @HttpCode(204)
    async getStatusCode(): Promise<string>{
        return `this req status code is 204`;
    }

    /** 设置响应头，可以设置自定义响应头 */
    @Post('header')
    @Header('Cache-Control', 'none')
    @Header('name', 'hehe')
    async getHeader(): Promise<string>{
        return `this req header cache-control is none`;
    }
}
