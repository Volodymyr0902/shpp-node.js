"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsFilter = void 0;
const common_1 = require("@nestjs/common");
let ProductsFilter = class ProductsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (exception instanceof common_1.HttpException) {
            const status = exception.getStatus();
            response.status(status).json({ error: "HTTP Error happened" });
        }
        else {
            response.status(404).json({ error: "Not Found" });
        }
    }
};
exports.ProductsFilter = ProductsFilter;
exports.ProductsFilter = ProductsFilter = __decorate([
    (0, common_1.Catch)()
], ProductsFilter);
//# sourceMappingURL=products.filter.js.map