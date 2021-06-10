import { Field, InputType } from "@nestjs/graphql";
import { IsString, Matches } from "class-validator";
import { regex } from "../../../core/typescript/variables/regex";
import { DeveloperError } from "../../../core/typescript/constants/dev-errors";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let ResetUserPasswordInput = class ResetUserPasswordInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      newPassword: { nullable: false, type: () => String },
      confirmNewPassword: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [
    IsString(),
    Matches(regex.password, { message: "auth.passwordPattern" }),
    __metadata("design:type", String),
  ],
  ResetUserPasswordInput.prototype,
  "newPassword",
  void 0
);
__decorate(
  [
    Field(() => String, { nullable: false }),
    IsString(),
    __metadata("design:type", String),
  ],
  ResetUserPasswordInput.prototype,
  "confirmNewPassword",
  void 0
);
ResetUserPasswordInput = __decorate([InputType()], ResetUserPasswordInput);
const _ResetUserPasswordInput = ResetUserPasswordInput;
export { _ResetUserPasswordInput as ResetUserPasswordInput };
