import { CreateParentServiceInput } from "./create-parent-service.input";
import { OmitType, PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { PartialLocalizeInput } from "../../../../core/graphql/base/dtos/localize.input";
import {
  IsNumber,
  IsPositive,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdateParentServiceInput = class UpdateParentServiceInput extends OmitType(
  PartialType(CreateParentServiceInput),
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
  UpdateParentServiceInput.prototype,
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
  UpdateParentServiceInput.prototype,
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
  UpdateParentServiceInput.prototype,
  "desc",
  void 0
);
UpdateParentServiceInput = __decorate([InputType()], UpdateParentServiceInput);
const _UpdateParentServiceInput = UpdateParentServiceInput;
export { _UpdateParentServiceInput as UpdateParentServiceInput };
