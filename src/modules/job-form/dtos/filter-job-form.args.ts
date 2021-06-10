import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { UpdateJobFormInput } from "./update-job-form.input";

let FilterJobFormArg = class FilterJobFormArg extends OmitType(
  PartialType(UpdateJobFormInput),
  ["cv"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterJobFormArg = __decorate([InputType()], FilterJobFormArg);
const _FilterJobFormArg = FilterJobFormArg;
export { _FilterJobFormArg as FilterJobFormArg };
