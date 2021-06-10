import { CreateJobFormInput } from "./create-job-form.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let UpdateJobFormInput = class UpdateJobFormInput extends PartialType(
  CreateJobFormInput
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return { id: { nullable: false, type: () => Number } };
  }
};
__decorate(
  [
    Field(() => Int),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  UpdateJobFormInput.prototype,
  "id",
  void 0
);
UpdateJobFormInput = __decorate([InputType()], UpdateJobFormInput);
const _UpdateJobFormInput = UpdateJobFormInput;
export { _UpdateJobFormInput as UpdateJobFormInput };
