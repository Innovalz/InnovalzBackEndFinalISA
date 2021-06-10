import { CreateServiceFeatureInput } from "./create-service-feature.input";
import { OmitType, PartialType, Field, Int, InputType } from "@nestjs/graphql";
import {
  IsNumber,
  IsPositive,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { PartialLocalizeInput } from "../../../../core/graphql/base/dtos/localize.input";
import { Type } from "class-transformer";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdateServiceFeatureInput = class UpdateServiceFeatureInput extends OmitType(
  PartialType(CreateServiceFeatureInput),
  ["title", "desc", "childService"] as any
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
  UpdateServiceFeatureInput.prototype,
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
  UpdateServiceFeatureInput.prototype,
  "title",
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
  UpdateServiceFeatureInput.prototype,
  "desc",
  void 0
);
UpdateServiceFeatureInput = __decorate(
  [InputType()],
  UpdateServiceFeatureInput
);
const _UpdateServiceFeatureInput = UpdateServiceFeatureInput;
export { _UpdateServiceFeatureInput as UpdateServiceFeatureInput };
