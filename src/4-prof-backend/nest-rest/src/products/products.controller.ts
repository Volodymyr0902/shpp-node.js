import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode, HttpException,
  HttpStatus,
  Param, ParseIntPipe,
  Post,
  Put,
  Redirect, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { ProductsFilter } from './exception-filters/products.filter';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { CreateProductPipe } from './pipes/create-product/create-product.pipe';
import { ProductsGuard } from './guards/products.guard';
import { Roles } from './decorators/products-roles.decorator';
import { ProductsInterceptor } from './interceptors/products.interceptor';
import {User} from './decorators/products-user.decorator'

@Controller('products')
@UseInterceptors(ProductsInterceptor)
@UseGuards(ProductsGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  @UseFilters(new ProductsFilter())
  async getById(@Param('id') id: string): Promise<Product | null> {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  @Header('x-header', 'super-header')
  @UsePipes(new ValidationPipe())
  create(@Body(CreateProductPipe) productNew: CreateProductDto): Promise<Product> {
    return this.productsService.create(productNew);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId): Promise<Product | null> {
    return this.productsService.remove(id);
  }

  @Put(':id')
  @Roles(["admin"])
  update(
    @Body() productUpd: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product | null> {
    return this.productsService.update(id, productUpd);
  }
}
