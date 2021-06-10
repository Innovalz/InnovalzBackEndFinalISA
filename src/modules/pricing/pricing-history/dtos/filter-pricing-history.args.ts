import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { UpdatePricingHistoryInput } from "./update-pricing-history.input";

let FilterPricingHistoryArg = class FilterPricingHistoryArg extends OmitType(
  PartialType(UpdatePricingHistoryInput),
  ["pricingServices"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterPricingHistoryArg = __decorate([InputType()], FilterPricingHistoryArg);
const _FilterPricingHistoryArg = FilterPricingHistoryArg;
export { _FilterPricingHistoryArg as FilterPricingHistoryArg };
