import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { UpdateServiceFeatureInput } from "./update-service-feature.input";

let FilterServiceFeatureArg = class FilterServiceFeatureArg extends OmitType(
  PartialType(UpdateServiceFeatureInput),
  ["image"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterServiceFeatureArg = __decorate([InputType()], FilterServiceFeatureArg);
const _FilterServiceFeatureArg = FilterServiceFeatureArg;
export { _FilterServiceFeatureArg as FilterServiceFeatureArg };
