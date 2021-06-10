import { InputType } from "@nestjs/graphql";
import { IsString, IsEmail, Matches } from "class-validator";
import { regex } from "../../../core/typescript/variables/regex";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let LoginUserInput = class LoginUserInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      email: { nullable: false, type: () => String },
      password: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [IsString(), IsEmail(), __metadata("design:type", String)],
  LoginUserInput.prototype,
  "email",
  void 0
);
__decorate(
  [IsString(), Matches(regex.password), __metadata("design:type", String)],
  LoginUserInput.prototype,
  "password",
  void 0
);
LoginUserInput = __decorate([InputType()], LoginUserInput);
const _LoginUserInput = LoginUserInput;
export { _LoginUserInput as LoginUserInput };
