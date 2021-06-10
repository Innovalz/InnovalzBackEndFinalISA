import { CreatePricingServiceInput } from "./create-pricing-service.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdatePricingServiceInput = class UpdatePricingServiceInput extends PartialType(
  CreatePricingServiceInput
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
  UpdatePricingServiceInput.prototype,
  "id",
  void 0
);
UpdatePricingServiceInput = __decorate(
  [InputType()],
  UpdatePricingServiceInput
);
const _UpdatePricingServiceInput = UpdatePricingServiceInput;
export { _UpdatePricingServiceInput as UpdatePricingServiceInput };
