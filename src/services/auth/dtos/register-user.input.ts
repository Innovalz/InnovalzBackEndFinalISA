import { Field, InputType } from "@nestjs/graphql";
import {
  IsString,
  IsEmail,
  Matches,
  IsMobilePhone,
  IsOptional,
  IsNotEmpty,
} from "class-validator";
import { regex } from "../../../core/typescript/variables/regex";
import { DeveloperError } from "../../../core/typescript/constants/dev-errors";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let RegisterUserInput = class RegisterUserInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      email: { nullable: false, type: () => String },
      password: { nullable: false, type: () => String },
      confirmPassword: { nullable: true, type: () => String },
      phone: { nullable: false, type: () => String },
      name: { nullable: true, type: () => String },
      company: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [IsString(), IsEmail(), __metadata("design:type", String)],
  RegisterUserInput.prototype,
  "email",
  void 0
);
__decorate(
  [
    IsString(),
    Matches(regex.password, { message: "auth.passwordPattern" }),
    __metadata("design:type", String),
  ],
  RegisterUserInput.prototype,
  "password",
  void 0
);
__decorate(
  [
    Field(() => String, { nullable: false }),
    IsString(),
    Matches(regex.password),
    __metadata("design:type", String),
  ],
  RegisterUserInput.prototype,
  "confirmPassword",
  void 0
);
__decorate(
  [IsString(), IsMobilePhone(), __metadata("design:type", String)],
  RegisterUserInput.prototype,
  "phone",
  void 0
);
__decorate(
  [IsOptional(), IsString(), IsNotEmpty(), __metadata("design:type", String)],
  RegisterUserInput.prototype,
  "name",
  void 0
);
__decorate(
  [IsOptional(), IsString(), IsNotEmpty(), __metadata("design:type", String)],
  RegisterUserInput.prototype,
  "company",
  void 0
);
RegisterUserInput = __decorate([InputType()], RegisterUserInput);
const _RegisterUserInput = RegisterUserInput;
export { _RegisterUserInput as RegisterUserInput };
