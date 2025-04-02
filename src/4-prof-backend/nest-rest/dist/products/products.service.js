"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    products = [];
    id = 0;
    getAll() {
        return this.products;
    }
    getById(id) {
        return this.products.find((prodId) => +id === prodId.id);
    }
    create(createProductDto) {
        this.products.push({
            ...createProductDto,
            id: this.id++,
        });
        return createProductDto;
    }
    remove(id) {
        const filtered = this.products.filter((prodId) => +id !== prodId.id);
        if (this.products.length > filtered.length) {
            this.products = filtered;
            return "Deleted";
        }
        return "Product not found";
    }
    update(id, updatedProductDto) {
        const index = this.products.findIndex((prodId) => +id === prodId.id);
        if (index > -1) {
            this.products[index] = {
                ...updatedProductDto,
                id: this.products[index].id,
            };
            return "Product updated";
        }
        return "Product not found";
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map