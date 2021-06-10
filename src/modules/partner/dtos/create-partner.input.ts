import { Field, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import { ImageScaler } from "../../../core/graphql/scalers/image.scaler";
import { Type } from "class-transformer";
import { ValidateNested, IsBoolean } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let CreatePartnerInput = class CreatePartnerInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
      isActive: { nullable: false, type: () => Boolean },
      onHome: { nullable: false, type: () => Boolean },
      image: { nullable: false, type: () => String },
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
  CreatePartnerInput.prototype,
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
  CreatePartnerInput.prototype,
  "desc",
  void 0
);
__decorate(
  [IsBoolean(), __metadata("design:type", Boolean)],
  CreatePartnerInput.prototype,
  "isActive",
  void 0
);
__decorate(
  [IsBoolean(), __metadata("design:type", Boolean)],
  CreatePartnerInput.prototype,
  "onHome",
  void 0
);
__decorate(
  [Field(() => ImageScaler), __metadata("design:type", String)],
  CreatePartnerInput.prototype,
  "image",
  void 0
);
CreatePartnerInput = __decorate([InputType()], CreatePartnerInput);
const _CreatePartnerInput = CreatePartnerInput;
export { _CreatePartnerInput as CreatePartnerInput };
