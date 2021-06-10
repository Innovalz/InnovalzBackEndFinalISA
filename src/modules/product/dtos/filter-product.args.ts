import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { UpdateProductInput } from "./update-product.input";

let FilterProductArg = class FilterProductArg extends OmitType(
  PartialType(UpdateProductInput),
  ["smallParagraphs", "logo", "icon"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterProductArg = __decorate([InputType()], FilterProductArg);
const _FilterProductArg = FilterProductArg;
export { _FilterProductArg as FilterProductArg };
