import { InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsMobilePhone } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let CreateContactUsInput = class CreateContactUsInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      name: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
      message: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreateContactUsInput.prototype,
  "name",
  void 0
);
__decorate(
  [IsString(), IsEmail(), __metadata("design:type", String)],
  CreateContactUsInput.prototype,
  "email",
  void 0
);
__decorate(
  [IsString(), IsMobilePhone(), __metadata("design:type", String)],
  CreateContactUsInput.prototype,
  "phone",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreateContactUsInput.prototype,
  "message",
  void 0
);
CreateContactUsInput = __decorate([InputType()], CreateContactUsInput);
const _CreateContactUsInput = CreateContactUsInput;
export { _CreateContactUsInput as CreateContactUsInput };
