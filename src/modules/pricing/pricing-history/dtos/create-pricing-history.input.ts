import { Field, Int, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ValidateNested, IsNumber } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { UserDataInput } from "./user-data.input";

let CreatePricingHistoryInput = class CreatePricingHistoryInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      user: {
        nullable: false,
        type: () => UserDataInput,
      },
      pricingServices: { nullable: false, type: () => [Number] },
    };
  }
};
__decorate(
  [
    Type(() => UserDataInput),
    ValidateNested(),
    __metadata("design:type", UserDataInput),
  ],
  CreatePricingHistoryInput.prototype,
  "user",
  void 0
);
__decorate(
  [
    Field(() => [Int]),
    IsNumber({}, { each: true }),
    __metadata("design:type", Array),
  ],
  CreatePricingHistoryInput.prototype,
  "pricingServices",
  void 0
);
CreatePricingHistoryInput = __decorate(
  [InputType()],
  CreatePricingHistoryInput
);
const _CreatePricingHistoryInput = CreatePricingHistoryInput;
export { _CreatePricingHistoryInput as CreatePricingHistoryInput };
