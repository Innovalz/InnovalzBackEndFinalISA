import { CreateSmallParagraphInput } from "./create-small-paragraph.input";
import { OmitType, PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { PartialLocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import {
  IsNumber,
  IsPositive,
  ValidateNested,
  IsOptional,
  IsArray,
} from "class-validator";
import { Type } from "class-transformer";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let UpdateSmallParagraphInput = class UpdateSmallParagraphInput extends OmitType(
  PartialType(CreateSmallParagraphInput),
  ["headline", "fullDesc"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: false, type: () => Number },
      headline: { nullable: true, type: () => String },
      fullDesc: { nullable: true, type: () => [String] },
    };
  }
};
__decorate(
  [
    Field(() => Int),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  UpdateSmallParagraphInput.prototype,
  "id",
  void 0
);
__decorate(
  [
    Field(() => PartialLocalizeInput, { nullable: true }),
    Type(() => PartialLocalizeInput),
    ValidateNested(),
    IsOptional(),
    __metadata("design:type", String),
  ],
  UpdateSmallParagraphInput.prototype,
  "headline",
  void 0
);
__decorate(
  [
    Field(() => [PartialLocalizeInput], { nullable: true }),
    Type(() => PartialLocalizeInput),
    ValidateNested({ each: true }),
    IsOptional(),
    IsArray(),
    __metadata("design:type", Array),
  ],
  UpdateSmallParagraphInput.prototype,
  "fullDesc",
  void 0
);
UpdateSmallParagraphInput = __decorate(
  [InputType()],
  UpdateSmallParagraphInput
);
const _UpdateSmallParagraphInput = UpdateSmallParagraphInput;
export { _UpdateSmallParagraphInput as UpdateSmallParagraphInput };
