import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAll(): (CreateProductDto & {
        id: number;
    })[];
    getById(id: string): (CreateProductDto & {
        id: number;
    }) | undefined;
    create(productNew: CreateProductDto): CreateProductDto;
    remove(id: string): "Deleted" | "Product not found";
    update(productUpd: UpdateProductDto, id: string): "Product not found" | "Product updated";
}
