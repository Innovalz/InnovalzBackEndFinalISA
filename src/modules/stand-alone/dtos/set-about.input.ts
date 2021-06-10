import { Field, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let SetAboutInput = class SetAboutInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => [String] },
      desc2: { nullable: false, type: () => String },
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
  SetAboutInput.prototype,
  "title",
  void 0
);
__decorate(
  [
    Field(() => [LocalizeInput]),
    Type(() => LocalizeInput),
    ValidateNested(),
    __metadata("design:type", Array),
  ],
  SetAboutInput.prototype,
  "desc",
  void 0
);
__decorate(
  [
    Field(() => LocalizeInput),
    Type(() => LocalizeInput),
    ValidateNested(),
    __metadata("design:type", String),
  ],
  SetAboutInput.prototype,
  "desc2",
  void 0
);
SetAboutInput = __decorate([InputType()], SetAboutInput);
const _SetAboutInput = SetAboutInput;
export { _SetAboutInput as SetAboutInput };
