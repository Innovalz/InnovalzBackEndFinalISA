import { CreatePricingCategoryInput } from "./create-pricing-category.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdatePricingCategoryInput = class UpdatePricingCategoryInput extends PartialType(
  CreatePricingCategoryInput
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return { id: { nullable: false, type: () => Number } };
  }
};
__decorate(
  [
    Field(() => Int),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  UpdatePricingCategoryInput.prototype,
  "id",
  void 0
);
UpdatePricingCategoryInput = __decorate(
  [InputType()],
  UpdatePricingCategoryInput
);
const _UpdatePricingCategoryInput = UpdatePricingCategoryInput;
export { _UpdatePricingCategoryInput as UpdatePricingCategoryInput };
