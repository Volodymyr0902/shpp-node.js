import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model, ObjectId } from 'mongoose';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | null>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    remove(id: ObjectId): Promise<Product | null>;
    update(id: string, updatedProductDto: UpdateProductDto): Promise<Product | null>;
}
