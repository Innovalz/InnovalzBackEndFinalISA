import { Field, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../../core/graphql/base/dtos/localize.input";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { Type, Exclude } from "class-transformer";
import { ValidateNested } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let CreateParentServiceInput = class CreateParentServiceInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
      icon: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [
    Field(() => LocalizeInput),
    Type(() => LocalizeInput),
    ValidateNested(),
    __metadata("design:type", String),
  ],
  CreateParentServiceInput.prototype,
  "title",
  void 0
);
__decorate(
  [
    Field(() => LocalizeInput),
    Type(() => LocalizeInput),
    ValidateNested(),
    __metadata("design:type", String),
  ],
  CreateParentServiceInput.prototype,
  "desc",
  void 0
);
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreateParentServiceInput.prototype,
  "icon",
  void 0
);
CreateParentServiceInput = __decorate([InputType()], CreateParentServiceInput);
const _CreateParentServiceInput = CreateParentServiceInput;
export { _CreateParentServiceInput as CreateParentServiceInput };
