"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductPipe = void 0;
const common_1 = require("@nestjs/common");
let CreateProductPipe = class CreateProductPipe {
    transform(value, metadata) {
        const price = +value.price;
        if (isNaN(price)) {
            throw new common_1.HttpException("Price is not a number", common_1.HttpStatus.BAD_REQUEST);
        }
        return { ...value, price };
    }
};
exports.CreateProductPipe = CreateProductPipe;
exports.CreateProductPipe = CreateProductPipe = __decorate([
    (0, common_1.Injectable)()
], CreateProductPipe);
//# sourceMappingURL=create-product.pipe.js.map