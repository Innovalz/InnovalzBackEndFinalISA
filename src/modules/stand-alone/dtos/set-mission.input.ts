import { Field, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let SetMissionInput = class SetMissionInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
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
  SetMissionInput.prototype,
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
  SetMissionInput.prototype,
  "desc",
  void 0
);
SetMissionInput = __decorate([InputType()], SetMissionInput);
const _SetMissionInput = SetMissionInput;
export { _SetMissionInput as SetMissionInput };
