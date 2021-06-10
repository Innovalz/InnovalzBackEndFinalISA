import { CreatePricingHistoryInput } from "./create-pricing-history.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdatePricingHistoryInput = class UpdatePricingHistoryInput extends PartialType(
  CreatePricingHistoryInput
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
  UpdatePricingHistoryInput.prototype,
  "id",
  void 0
);
UpdatePricingHistoryInput = __decorate(
  [InputType()],
  UpdatePricingHistoryInput
);
const _UpdatePricingHistoryInput = UpdatePricingHistoryInput;
export { _UpdatePricingHistoryInput as UpdatePricingHistoryInput };
