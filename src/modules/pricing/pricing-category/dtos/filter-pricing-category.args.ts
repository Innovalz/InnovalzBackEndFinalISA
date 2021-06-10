import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { UpdatePricingCategoryInput } from "./update-pricing-category.input";

let FilterPricingCategoryArg = class FilterPricingCategoryArg extends OmitType(
  PartialType(UpdatePricingCategoryInput),
  [] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterPricingCategoryArg = __decorate([InputType()], FilterPricingCategoryArg);
const _FilterPricingCategoryArg = FilterPricingCategoryArg;
export { _FilterPricingCategoryArg as FilterPricingCategoryArg };
