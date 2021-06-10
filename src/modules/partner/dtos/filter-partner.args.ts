import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { UpdatePartnerInput } from "./update-partner.input";

let FilterPartnerArg = class FilterPartnerArg extends OmitType(
  PartialType(UpdatePartnerInput),
  ["image"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterPartnerArg = __decorate([InputType()], FilterPartnerArg);
const _FilterPartnerArg = FilterPartnerArg;
export { _FilterPartnerArg as FilterPartnerArg };
