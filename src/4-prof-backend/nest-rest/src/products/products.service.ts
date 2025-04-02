import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

type productStored = CreateProductDto & {id: number}

@Injectable()
export class ProductsService {
  private products: productStored[] = []
  private id = 0

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((prodId) => +id === prodId.id);
  }

  create(createProductDto: CreateProductDto) {
    this.products.push({
      ...createProductDto,
      id: this.id++,
    })
    return createProductDto
  }

  remove(id: string) {
    const filtered = this.products.filter((prodId) => +id !== prodId.id);

    if (this.products.length > filtered.length ) {
      this.products = filtered
      return "Deleted"
    }

    return "Product not found"
  }

  update(id: string, updatedProductDto: UpdateProductDto) {
    const index = this.products.findIndex((prodId) => +id === prodId.id);

    if (index > -1) {
      this.products[index] = {
        ...updatedProductDto,
        id: this.products[index].id,
      }

      return "Product updated"
    }

    return "Product not found"
  }
}
