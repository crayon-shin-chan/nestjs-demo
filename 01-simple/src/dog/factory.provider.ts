import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';

/** inject中与工厂函数一一对应 */
export const SomeProvider: FactoryProvider = {
    provide: 'some',
    useFactory: (name: string) => `this is factory ${name}`,
    inject: ['name'],
};