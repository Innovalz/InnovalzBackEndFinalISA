import { OmitType, PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { RegisterUserInput } from "../../../services/auth/dtos/register-user.input";

let UpdateUserInput = class UpdateUserInput extends OmitType(
  PartialType(RegisterUserInput),
  ["password", "confirmPassword"] as any
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
  UpdateUserInput.prototype,
  "id",
  void 0
);
UpdateUserInput = __decorate([InputType()], UpdateUserInput);
const _UpdateUserInput = UpdateUserInput;
export { _UpdateUserInput as UpdateUserInput };
