import { CreatePricingStepInput } from "./create-pricing-step.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdatePricingStepInput = class UpdatePricingStepInput extends PartialType(
  CreatePricingStepInput
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
  UpdatePricingStepInput.prototype,
  "id",
  void 0
);
UpdatePricingStepInput = __decorate([InputType()], UpdatePricingStepInput);
const _UpdatePricingStepInput = UpdatePricingStepInput;
export { _UpdatePricingStepInput as UpdatePricingStepInput };
