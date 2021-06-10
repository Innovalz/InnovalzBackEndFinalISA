import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { UpdatePricingServiceInput } from "./update-pricing-service.input";

let FilterPricingServiceArg = class FilterPricingServiceArg extends OmitType(
  PartialType(UpdatePricingServiceInput),
  ["image"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterPricingServiceArg = __decorate([InputType()], FilterPricingServiceArg);
const _FilterPricingServiceArg = FilterPricingServiceArg;
export { _FilterPricingServiceArg as FilterPricingServiceArg };
