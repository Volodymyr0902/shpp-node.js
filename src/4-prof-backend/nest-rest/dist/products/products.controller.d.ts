import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { ObjectId } from 'mongoose';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | null>;
    create(productNew: CreateProductDto): Promise<Product>;
    remove(id: ObjectId): Promise<Product | null>;
    update(productUpd: UpdateProductDto, id: string): Promise<Product | null>;
}
