import { CreateContactUsInput } from "./create-contact-us.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let UpdateContactUsInput = class UpdateContactUsInput extends PartialType(
  CreateContactUsInput
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
  UpdateContactUsInput.prototype,
  "id",
  void 0
);
UpdateContactUsInput = __decorate([InputType()], UpdateContactUsInput);
const _UpdateContactUsInput = UpdateContactUsInput;
export { _UpdateContactUsInput as UpdateContactUsInput };
