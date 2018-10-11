import { ValueProvider } from '@nestjs/common/interfaces/modules/provider.interface';

export const NameProvider: ValueProvider = {
    provide: 'name',
    useValue: 'zhangsan',
};
