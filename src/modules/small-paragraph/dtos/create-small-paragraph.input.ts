import { Field, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import { Type } from "class-transformer";
import { ValidateNested, IsArray } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let CreateSmallParagraphInput = class CreateSmallParagraphInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      headline: { nullable: false, type: () => String },
      fullDesc: { nullable: false, type: () => [String] },
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
  CreateSmallParagraphInput.prototype,
  "headline",
  void 0
);
__decorate(
  [
    Field(() => [LocalizeInput]),
    Type(() => LocalizeInput),
    ValidateNested({ each: true }),
    IsArray(),
    __metadata("design:type", Array),
  ],
  CreateSmallParagraphInput.prototype,
  "fullDesc",
  void 0
);
CreateSmallParagraphInput = __decorate(
  [InputType()],
  CreateSmallParagraphInput
);
const _CreateSmallParagraphInput = CreateSmallParagraphInput;
export { _CreateSmallParagraphInput as CreateSmallParagraphInput };
