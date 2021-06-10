import { OmitType, PartialType, Field, InputType } from "@nestjs/graphql";
import { PartialLocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { UpdateSmallParagraphInput } from "./update-small-paragraph.input";
import { Type } from "class-transformer";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let FilterSmallParagraphArg = class FilterSmallParagraphArg extends OmitType(
  PartialType(UpdateSmallParagraphInput),
  ["headline", "fullDesc"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      headline: { nullable: true, type: () => String },
      fullDesc: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [
    Field(() => PartialLocalizeInput, { nullable: true }),
    Type(() => PartialLocalizeInput),
    ValidateNested(),
    IsOptional(),
    __metadata("design:type", String),
  ],
  FilterSmallParagraphArg.prototype,
  "headline",
  void 0
);
__decorate(
  [IsOptional(), IsString(), __metadata("design:type", String)],
  FilterSmallParagraphArg.prototype,
  "fullDesc",
  void 0
);
FilterSmallParagraphArg = __decorate([InputType()], FilterSmallParagraphArg);
const _FilterSmallParagraphArg = FilterSmallParagraphArg;
export { _FilterSmallParagraphArg as FilterSmallParagraphArg };
