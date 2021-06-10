import { PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { UpdateContactUsInput } from "./update-contact-us.input";

let FilterContactUsArg = class FilterContactUsArg extends PartialType(
  UpdateContactUsInput
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterContactUsArg = __decorate([InputType()], FilterContactUsArg);
const _FilterContactUsArg = FilterContactUsArg;
export { _FilterContactUsArg as FilterContactUsArg };
