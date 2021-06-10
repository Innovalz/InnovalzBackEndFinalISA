import { Field, InputType } from "@nestjs/graphql";
import { IsString, Matches } from "class-validator";
import { regex } from "../../../core/typescript/variables/regex";
import { DeveloperError } from "../../../core/typescript/constants/dev-errors";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let ChangeUserPasswordInput = class ChangeUserPasswordInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      oldPassword: { nullable: false, type: () => String },
      newPassword: { nullable: false, type: () => String },
      confirmNewPassword: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [IsString(), Matches(regex.password), __metadata("design:type", String)],
  ChangeUserPasswordInput.prototype,
  "oldPassword",
  void 0
);
__decorate(
  [
    IsString(),
    Matches(regex.password, { message: "auth.passwordPattern" }),
    __metadata("design:type", String),
  ],
  ChangeUserPasswordInput.prototype,
  "newPassword",
  void 0
);
__decorate(
  [
    Field(() => String, { nullable: false }),
    IsString(),
    __metadata("design:type", String),
  ],
  ChangeUserPasswordInput.prototype,
  "confirmNewPassword",
  void 0
);
ChangeUserPasswordInput = __decorate([InputType()], ChangeUserPasswordInput);
const _ChangeUserPasswordInput = ChangeUserPasswordInput;
export { _ChangeUserPasswordInput as ChangeUserPasswordInput };
