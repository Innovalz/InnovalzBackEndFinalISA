import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductResolver } from "./product.resolver";
import { ProductSchema } from "./repo/product.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { ProductRepo } from "./repo/product.repo";
import { SmallParagraphModule } from "../small-paragraph/small-paragraph.module";
import { __decorate } from "../../helpers/decorate";

let ProductModule = class ProductModule {};
ProductModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.product, ProductSchema),
        SmallParagraphModule,
      ],
      providers: [ProductRepo, ProductService, ProductResolver],
      exports: [ProductService],
    }),
  ],
  ProductModule
);
const _ProductModule = ProductModule;
export { _ProductModule as ProductModule };
