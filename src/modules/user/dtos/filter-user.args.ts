import { PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { UpdateUserInput } from "./update-user.input";

let FilterUserArg = class FilterUserArg extends PartialType(UpdateUserInput) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterUserArg = __decorate([InputType()], FilterUserArg);
const _FilterUserArg = FilterUserArg;
export { _FilterUserArg as FilterUserArg };
