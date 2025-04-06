import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';

@Injectable()
export class CreateProductPipe implements PipeTransform {
  transform(value: CreateProductDto, metadata: ArgumentMetadata) {
    const price = +value.price;
    if (isNaN(price)) {
      throw new HttpException("Price is not a number", HttpStatus.BAD_REQUEST)
    }

    return { ...value, price };
  }
}
