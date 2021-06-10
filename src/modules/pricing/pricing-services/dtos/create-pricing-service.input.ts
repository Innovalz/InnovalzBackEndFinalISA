import { Field, Int, InputType } from "@nestjs/graphql";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { Type, Exclude } from "class-transformer";
import {
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsPositive,
  ValidateNested,
} from "class-validator";
import { PricingFeatureInput } from "./pricing-feature.input";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let CreatePricingServiceInput = class CreatePricingServiceInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      category: { nullable: false, type: () => Number },
      title: { nullable: true, type: () => String },
      desc: { nullable: true, type: () => String },
      setupRate: { nullable: true, type: () => Number },
      setupTime: { nullable: true, type: () => Number },
      devRate: { nullable: true, type: () => Number },
      devTime: { nullable: true, type: () => Number },
      monthlyHostRate: { nullable: true, type: () => Number },
      monthlyHostDesc: { nullable: true, type: () => String },
      price: { nullable: true, type: () => Number },
      team: { nullable: true, type: () => [Number] },
      features: {
        nullable: true,
        type: () => PricingFeatureInput,
      },
      image: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [Field(() => Int), IsNumber(), __metadata("design:type", Number)],
  CreatePricingServiceInput.prototype,
  "category",
  void 0
);
__decorate(
  [IsOptional(), IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingServiceInput.prototype,
  "title",
  void 0
);
__decorate(
  [IsOptional(), IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingServiceInput.prototype,
  "desc",
  void 0
);
__decorate(
  [IsOptional(), IsNumber(), IsPositive(), __metadata("design:type", Number)],
  CreatePricingServiceInput.prototype,
  "setupRate",
  void 0
);
__decorate(
  [
    Field(() => Int),
    IsOptional(),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  CreatePricingServiceInput.prototype,
  "setupTime",
  void 0
);
__decorate(
  [IsOptional(), IsNumber(), IsPositive(), __metadata("design:type", Number)],
  CreatePricingServiceInput.prototype,
  "devRate",
  void 0
);
__decorate(
  [
    Field(() => Int),
    IsOptional(),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  CreatePricingServiceInput.prototype,
  "devTime",
  void 0
);
__decorate(
  [IsOptional(), IsNumber(), IsPositive(), __metadata("design:type", Number)],
  CreatePricingServiceInput.prototype,
  "monthlyHostRate",
  void 0
);
__decorate(
  [IsOptional(), IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingServiceInput.prototype,
  "monthlyHostDesc",
  void 0
);
__decorate(
  [IsOptional(), IsNumber(), IsPositive(), __metadata("design:type", Number)],
  CreatePricingServiceInput.prototype,
  "price",
  void 0
);
__decorate(
  [
    Field(() => [Int], { nullable: true }),
    IsOptional(),
    IsNumber({}, { each: true }),
    IsPositive({ each: true }),
    __metadata("design:type", Array),
  ],
  CreatePricingServiceInput.prototype,
  "team",
  void 0
);
__decorate(
  [
    Type(() => PricingFeatureInput),
    ValidateNested(),
    IsOptional(),
    __metadata("design:type", PricingFeatureInput),
  ],
  CreatePricingServiceInput.prototype,
  "features",
  void 0
);
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreatePricingServiceInput.prototype,
  "image",
  void 0
);
CreatePricingServiceInput = __decorate(
  [InputType()],
  CreatePricingServiceInput
);
const _CreatePricingServiceInput = CreatePricingServiceInput;
export { _CreatePricingServiceInput as CreatePricingServiceInput };
