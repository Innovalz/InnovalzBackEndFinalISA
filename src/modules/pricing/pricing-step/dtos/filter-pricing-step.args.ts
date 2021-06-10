import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { UpdatePricingStepInput } from "./update-pricing-step.input";

let FilterPricingStepArg = class FilterPricingStepArg extends OmitType(
  PartialType(UpdatePricingStepInput),
  [] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterPricingStepArg = __decorate([InputType()], FilterPricingStepArg);
const _FilterPricingStepArg = FilterPricingStepArg;
export { _FilterPricingStepArg as FilterPricingStepArg };
