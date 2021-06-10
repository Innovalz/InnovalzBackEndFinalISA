import { Field, Int, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import { ImageScaler } from "../../../core/graphql/scalers/image.scaler";
import { Type, Exclude } from "class-transformer";
import { ValidateNested, IsNumber, IsBoolean } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let CreateProductInput = class CreateProductInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
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
  [
    Field(() => LocalizeInput),
    Type(() => LocalizeInput),
    ValidateNested(),
    __metadata("design:type", String),
  ],
  CreateProductInput.prototype,
  "title",
  void 0
);
__decorate(
  [
    Field(() => LocalizeInput),
    Type(() => LocalizeInput),
    ValidateNested(),
    __metadata("design:type", String),
  ],
  CreateProductInput.prototype,
  "subTitle",
  void 0
);
__decorate(
  [
    Field(() => LocalizeInput),
    Type(() => LocalizeInput),
    ValidateNested(),
    __metadata("design:type", String),
  ],
  CreateProductInput.prototype,
  "shortDesc",
  void 0
);
__decorate(
  [
    Field(() => [Int]),
    IsNumber({}, { each: true }),
    __metadata("design:type", Array),
  ],
  CreateProductInput.prototype,
  "smallParagraphs",
  void 0
);
__decorate(
  [IsBoolean(), __metadata("design:type", Boolean)],
  CreateProductInput.prototype,
  "isActive",
  void 0
);
__decorate(
  [IsBoolean(), __metadata("design:type", Boolean)],
  CreateProductInput.prototype,
  "onHome",
  void 0
);
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreateProductInput.prototype,
  "logo",
  void 0
);
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreateProductInput.prototype,
  "icon",
  void 0
);
CreateProductInput = __decorate([InputType()], CreateProductInput);
const _CreateProductInput = CreateProductInput;
export { _CreateProductInput as CreateProductInput };
