import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
export declare class CreateProductPipe implements PipeTransform {
    transform(value: CreateProductDto, metadata: ArgumentMetadata): {
        price: number;
        title: string;
    };
}
