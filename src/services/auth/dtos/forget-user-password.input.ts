import { InputType } from "@nestjs/graphql";
import { IsString, IsEmail } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let ForgetUserPasswordInput = class ForgetUserPasswordInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return { email: { nullable: false, type: () => String } };
  }
};
__decorate(
  [IsString(), IsEmail(), __metadata("design:type", String)],
  ForgetUserPasswordInput.prototype,
  "email",
  void 0
);
ForgetUserPasswordInput = __decorate([InputType()], ForgetUserPasswordInput);
const _ForgetUserPasswordInput = ForgetUserPasswordInput;
export { _ForgetUserPasswordInput as ForgetUserPasswordInput };
