import { CreatePartnerInput } from "./create-partner.input";
import { OmitType, PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { PartialLocalizeInput } from "../../../core/graphql/base/dtos/localize.input";
import {
  IsNumber,
  IsPositive,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let UpdatePartnerInput = class UpdatePartnerInput extends OmitType(
  PartialType(CreatePartnerInput),
  ["title", "desc"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: false, type: () => Number },
      title: { nullable: true, type: () => String },
      desc: { nullable: true, type: () => String },
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
  UpdatePartnerInput.prototype,
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
  UpdatePartnerInput.prototype,
  "title",
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
  UpdatePartnerInput.prototype,
  "desc",
  void 0
);
UpdatePartnerInput = __decorate([InputType()], UpdatePartnerInput);
const _UpdatePartnerInput = UpdatePartnerInput;
export { _UpdatePartnerInput as UpdatePartnerInput };
