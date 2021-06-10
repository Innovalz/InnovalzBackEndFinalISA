import { PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { UpdateJobInput } from "./update-job.input";

let FilterJobArg = class FilterJobArg extends PartialType(UpdateJobInput) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterJobArg = __decorate([InputType()], FilterJobArg);
const _FilterJobArg = FilterJobArg;
export { _FilterJobArg as FilterJobArg };
