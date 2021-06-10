import { CreateJobInput } from "./create-job.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let UpdateJobInput = class UpdateJobInput extends PartialType(CreateJobInput) {
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
  UpdateJobInput.prototype,
  "id",
  void 0
);
UpdateJobInput = __decorate([InputType()], UpdateJobInput);
const _UpdateJobInput = UpdateJobInput;
export { _UpdateJobInput as UpdateJobInput };
