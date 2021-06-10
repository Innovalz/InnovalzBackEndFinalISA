import { CreateChildServiceInput } from "./create-child-service.input";
import { OmitType, PartialType, Field, Int, InputType } from "@nestjs/graphql";
import {
  PartialLocalizeInput,
  LocalizeInput,
} from "../../../../core/graphql/base/dtos/localize.input";
import {
  IsNumber,
  IsPositive,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdateChildServiceInput = class UpdateChildServiceInput extends OmitType(
  PartialType(CreateChildServiceInput),
  ["title", "fullDesc", "parentService"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: false, type: () => Number },
      title: { nullable: false, type: () => String },
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
  UpdateChildServiceInput.prototype,
  "id",
  void 0
);
__decorate(
  [
    Field(() => PartialLocalizeInput),
    Type(() => PartialLocalizeInput),
    ValidateNested(),
    IsOptional(),
    __metadata("design:type", String),
  ],
  UpdateChildServiceInput.prototype,
  "title",
  void 0
);
__decorate(
  [
    Field(() => [LocalizeInput], { nullable: true }),
    Type(() => LocalizeInput),
    ValidateNested({ each: true }),
    IsOptional(),
    __metadata("design:type", Array),
  ],
  UpdateChildServiceInput.prototype,
  "fullDesc",
  void 0
);
UpdateChildServiceInput = __decorate([InputType()], UpdateChildServiceInput);
const _UpdateChildServiceInput = UpdateChildServiceInput;
export { _UpdateChildServiceInput as UpdateChildServiceInput };
