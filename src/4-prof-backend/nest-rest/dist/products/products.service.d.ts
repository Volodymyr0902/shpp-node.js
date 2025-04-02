import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
type productStored = CreateProductDto & {
    id: number;
};
export declare class ProductsService {
    private products;
    private id;
    getAll(): productStored[];
    getById(id: string): productStored | undefined;
    create(createProductDto: CreateProductDto): CreateProductDto;
    remove(id: string): "Deleted" | "Product not found";
    update(id: string, updatedProductDto: UpdateProductDto): "Product not found" | "Product updated";
}
export {};
