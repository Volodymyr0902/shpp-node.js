import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class ProductsFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
