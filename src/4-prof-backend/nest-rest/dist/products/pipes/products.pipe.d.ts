import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ProductsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
