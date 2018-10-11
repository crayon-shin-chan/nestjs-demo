import { ClassProvider } from '@nestjs/common/interfaces/modules/provider.interface';

export class Dog{

    protected name: string;

}

export class JinMao extends Dog{

    constructor(){
        super();
        this.name = '金毛';
    }

}

/** 类Provider，实际上注入的是类对象 */
export const DogProvider: ClassProvider = {
    provide: 'dog',
    useClass: JinMao,
};