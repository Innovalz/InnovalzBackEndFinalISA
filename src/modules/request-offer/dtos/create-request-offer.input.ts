import { Field, Int, InputType } from "@nestjs/graphql";
import { DeveloperError } from "../../../core/typescript/constants/dev-errors";
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsMobilePhone,
  IsNumber,
  IsOptional,
  ValidateIf,
} from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let CreateRequestOfferInput = class CreateRequestOfferInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      name: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
      product: { nullable: true, type: () => Number },
      otherProduct: { nullable: true, type: () => String },
      features: { nullable: true, type: () => [Number] },
      details: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreateRequestOfferInput.prototype,
  "name",
  void 0
);
__decorate(
  [IsString(), IsEmail(), __metadata("design:type", String)],
  CreateRequestOfferInput.prototype,
  "email",
  void 0
);
__decorate(
  [IsString(), IsMobilePhone(), __metadata("design:type", String)],
  CreateRequestOfferInput.prototype,
  "phone",
  void 0
);
__decorate(
  [
    Field(() => Int, { nullable: true }),
    IsNumber(),
    IsOptional(),
    __metadata("design:type", Number),
  ],
  CreateRequestOfferInput.prototype,
  "product",
  void 0
);
__decorate(
  [
    IsString(),
    IsOptional(),
    ValidateIf((obj) => {
      if (
        (!obj.product && !obj.otherProduct) ||
        (obj.product && obj.otherProduct)
      ) {
        throw new Error(DeveloperError.productOrOtherProduct);
      }
      return true;
    }),
    __metadata("design:type", String),
  ],
  CreateRequestOfferInput.prototype,
  "otherProduct",
  void 0
);
__decorate(
  [
    Field(() => [Int], { nullable: true }),
    IsNumber({}, { each: true }),
    IsOptional(),
    __metadata("design:type", Array),
  ],
  CreateRequestOfferInput.prototype,
  "features",
  void 0
);
__decorate(
  [IsString(), IsOptional(), __metadata("design:type", String)],
  CreateRequestOfferInput.prototype,
  "details",
  void 0
);
CreateRequestOfferInput = __decorate([InputType()], CreateRequestOfferInput);
const _CreateRequestOfferInput = CreateRequestOfferInput;
export { _CreateRequestOfferInput as CreateRequestOfferInput };
