import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  @Header('x-header', 'super-header')
  create(@Body() productNew: CreateProductDto) {
   return this.productsService.create(productNew);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Put(':id')
  update(@Body() productUpd: UpdateProductDto, @Param('id') id: string) {
    return this.productsService.update(id, productUpd);
  }
}
