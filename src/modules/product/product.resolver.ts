import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { ProductService } from "./product.service";
import {
  FindManyProductsEntity,
  ProductEntity,
} from "./entities/product.entity";
import { CreateProductInput } from "./dtos/create-product.input";
import { UpdateProductInput } from "./dtos/update-product.input";
import { FilterProductArg } from "./dtos/filter-product.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../core/graphql/base/dtos/base.args";
import { UploadHandler } from "../../core/graphql/upload-handler.class";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { SmallParagraphEntity } from "../small-paragraph/entities/small-paragraph.entity";
import { SmallParagraphService } from "../small-paragraph/small-paragraph.service";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let ProductResolver = class ProductResolver {
  private _productService: any;
  private _smallParagraphService: any;
  constructor(_productService: any, _smallParagraphService: any) {
    this._productService = _productService;
    this._smallParagraphService = _smallParagraphService;
  }
  async findManyProducts(query = {}, options: any, customOptions: any) {
    return this._productService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneProduct(query: any, customOptions: any) {
    return this._productService.findOne(query, null, customOptions);
  }
  async createProduct(data: any, customOptions: any) {
    await UploadHandler.forRequired(data, { icon: "image", logo: "image" });
    return this._productService.create(data, customOptions);
  }
  async updateProduct(data: { id: any }, customOptions: any) {
    await UploadHandler.forOptional(data, { icon: "image", logo: "image" });
    return this._productService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removeProduct(args: { id: any }, customOptions: any) {
    return this._productService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
  async smallParagraphs(product: { smallParagraphs: any }, customOptions: any) {
    return await this._smallParagraphService.findAll(
      {
        id: { $in: product.smallParagraphs },
      },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.product.findAll),
    Query(() => FindManyProductsEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterProductArg, OptionsArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  ProductResolver.prototype,
  "findManyProducts",
  null
);
__decorate(
  [
    Auth(authRoles.product.findOne),
    Query(() => ProductEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterProductArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  ProductResolver.prototype,
  "findOneProduct",
  null
);
__decorate(
  [
    Auth(authRoles.product.create),
    Mutation(() => ProductEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProductInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ProductResolver.prototype,
  "createProduct",
  null
);
__decorate(
  [
    Auth(authRoles.product.update),
    Mutation(() => ProductEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateProductInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ProductResolver.prototype,
  "updateProduct",
  null
);
__decorate(
  [
    Auth(authRoles.product.delete),
    Mutation(() => ProductEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  ProductResolver.prototype,
  "removeProduct",
  null
);
__decorate(
  [
    ResolveField(() => [SmallParagraphEntity]),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  ProductResolver.prototype,
  "smallParagraphs",
  null
);
ProductResolver = __decorate(
  [
    Resolver(() => ProductEntity),
    __metadata("design:paramtypes", [ProductService, SmallParagraphService]),
  ],
  ProductResolver
);
const _ProductResolver = ProductResolver;
export { _ProductResolver as ProductResolver };
