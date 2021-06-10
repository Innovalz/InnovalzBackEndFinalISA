import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";
import { ImageScaler } from "../../../core/graphql/scalers/image.scaler";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { SmallParagraphEntity } from "../../small-paragraph/entities/small-paragraph.entity";

let ProductEntity = class ProductEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      title: { nullable: false, type: () => String },
      subTitle: { nullable: false, type: () => String },
      shortDesc: { nullable: false, type: () => String },
      smallParagraphs: { nullable: false, type: () => [Number] },
      isActive: { nullable: false, type: () => Boolean },
      onHome: { nullable: false, type: () => Boolean },
      logo: { nullable: false, type: () => String },
      icon: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
__decorate(
  [Field(() => [SmallParagraphEntity]), __metadata("design:type", Array)],
  ProductEntity.prototype,
  "smallParagraphs",
  void 0
);
__decorate(
  [Field(() => ImageScaler), __metadata("design:type", String)],
  ProductEntity.prototype,
  "logo",
  void 0
);
__decorate(
  [Field(() => ImageScaler), __metadata("design:type", String)],
  ProductEntity.prototype,
  "icon",
  void 0
);
ProductEntity = __decorate([ObjectType()], ProductEntity);
const _ProductEntity = ProductEntity;
export { _ProductEntity as ProductEntity };

let FindManyProductsEntity = class FindManyProductsEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [ProductEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyProductsEntity = __decorate([ObjectType()], FindManyProductsEntity);
const _FindManyProductsEntity = FindManyProductsEntity;
export { _FindManyProductsEntity as FindManyProductsEntity };
