import { InputType } from "@nestjs/graphql";
import { IsMobilePhone, IsString, IsNotEmpty, IsEmail } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UserDataInput = class UserDataInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      phone: { nullable: false, type: () => String },
      name: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [IsMobilePhone(), IsString(), __metadata("design:type", String)],
  UserDataInput.prototype,
  "phone",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  UserDataInput.prototype,
  "name",
  void 0
);
__decorate(
  [IsEmail(), IsString(), __metadata("design:type", String)],
  UserDataInput.prototype,
  "email",
  void 0
);
UserDataInput = __decorate([InputType()], UserDataInput);
const _UserDataInput = UserDataInput;
export { _UserDataInput as UserDataInput };
