import { Field, Int, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../../core/graphql/base/dtos/localize.input";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { Type, Exclude } from "class-transformer";
import { ValidateNested, IsNumber } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let CreateServiceFeatureInput = class CreateServiceFeatureInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
      childService: { nullable: false, type: () => Number },
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
  CreateServiceFeatureInput.prototype,
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
  CreateServiceFeatureInput.prototype,
  "desc",
  void 0
);
__decorate(
  [Field(() => Int), IsNumber(), __metadata("design:type", Number)],
  CreateServiceFeatureInput.prototype,
  "childService",
  void 0
);
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreateServiceFeatureInput.prototype,
  "image",
  void 0
);
CreateServiceFeatureInput = __decorate(
  [InputType()],
  CreateServiceFeatureInput
);
const _CreateServiceFeatureInput = CreateServiceFeatureInput;
export { _CreateServiceFeatureInput as CreateServiceFeatureInput };
