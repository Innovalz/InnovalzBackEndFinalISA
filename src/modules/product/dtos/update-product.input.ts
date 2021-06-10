import { CreateProductInput } from "./create-product.input";
import { OmitType, PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { PartialLocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import {
  IsNumber,
  IsPositive,
  ValidateNested,
  IsOptional,
  IsArray,
} from "class-validator";
import { Type } from "class-transformer";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let UpdateProductInput = class UpdateProductInput extends OmitType(
  PartialType(CreateProductInput),
  ["title", "subTitle", "shortDesc", "smallParagraphs"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: false, type: () => Number },
      title: { nullable: true, type: () => String },
      subTitle: { nullable: true, type: () => String },
      shortDesc: { nullable: true, type: () => String },
      smallParagraphs: { nullable: true, type: () => [Number] },
      parent: { nullable: true, type: () => Number },
    };
  }
};
__decorate(
  [
    Field(() => Int),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  UpdateProductInput.prototype,
  "id",
  void 0
);
__decorate(
  [
    Field(() => PartialLocalizeInput),
    Type(() => PartialLocalizeInput),
    ValidateNested(),
    IsOptional(),
    __metadata("design:type", String),
  ],
  UpdateProductInput.prototype,
  "title",
  void 0
);
__decorate(
  [
    Field(() => PartialLocalizeInput),
    Type(() => PartialLocalizeInput),
    ValidateNested(),
    IsOptional(),
    __metadata("design:type", String),
  ],
  UpdateProductInput.prototype,
  "subTitle",
  void 0
);
__decorate(
  [
    Field(() => PartialLocalizeInput),
    Type(() => PartialLocalizeInput),
    ValidateNested(),
    IsOptional(),
    __metadata("design:type", String),
  ],
  UpdateProductInput.prototype,
  "shortDesc",
  void 0
);
__decorate(
  [
    Field(() => [Int], { nullable: true }),
    IsNumber({}, { each: true }),
    IsOptional(),
    IsArray(),
    __metadata("design:type", Array),
  ],
  UpdateProductInput.prototype,
  "smallParagraphs",
  void 0
);
__decorate(
  [
    Field(() => Int),
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number),
  ],
  UpdateProductInput.prototype,
  "parent",
  void 0
);
UpdateProductInput = __decorate([InputType()], UpdateProductInput);
const _UpdateProductInput = UpdateProductInput;
export { _UpdateProductInput as UpdateProductInput };
