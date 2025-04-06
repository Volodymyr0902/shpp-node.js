"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let ProductsInterceptor = class ProductsInterceptor {
    intercept(context, next) {
        console.log('Interceptor applied.');
        return next.handle()
            .pipe((0, rxjs_1.catchError)(err => (0, rxjs_1.throwError)(() => new common_1.HttpException("Intercepted error", common_1.HttpStatus.CONFLICT))));
    }
};
exports.ProductsInterceptor = ProductsInterceptor;
exports.ProductsInterceptor = ProductsInterceptor = __decorate([
    (0, common_1.Injectable)()
], ProductsInterceptor);
//# sourceMappingURL=products.interceptor.js.map