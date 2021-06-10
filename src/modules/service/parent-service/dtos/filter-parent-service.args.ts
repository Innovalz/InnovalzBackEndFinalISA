import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { UpdateParentServiceInput } from "./update-parent-service.input";

let FilterParentServiceArg = class FilterParentServiceArg extends OmitType(
  PartialType(UpdateParentServiceInput),
  ["icon"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterParentServiceArg = __decorate([InputType()], FilterParentServiceArg);
const _FilterParentServiceArg = FilterParentServiceArg;
export { _FilterParentServiceArg as FilterParentServiceArg };
