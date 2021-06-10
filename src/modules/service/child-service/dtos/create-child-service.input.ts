import { Field, Int, InputType } from "@nestjs/graphql";
import { LocalizeInput } from "../../../../core/graphql/base/dtos/localize.input";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { Type, Exclude } from "class-transformer";
import { ValidateNested, IsArray, IsBoolean, IsNumber } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let CreateChildServiceInput = class CreateChildServiceInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      fullDesc: { nullable: false, type: () => [String] },
      isActive: { nullable: false, type: () => Boolean },
      onHome: { nullable: false, type: () => Boolean },
      logo: { nullable: false, type: () => String },
      icon: { nullable: false, type: () => String },
      parentService: { nullable: false, type: () => Number },
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
  CreateChildServiceInput.prototype,
  "title",
  void 0
);
__decorate(
  [
    Field(() => [LocalizeInput]),
    Type(() => LocalizeInput),
    ValidateNested(),
    IsArray(),
    __metadata("design:type", Array),
  ],
  CreateChildServiceInput.prototype,
  "fullDesc",
  void 0
);
__decorate(
  [IsBoolean(), __metadata("design:type", Boolean)],
  CreateChildServiceInput.prototype,
  "isActive",
  void 0
);
__decorate(
  [IsBoolean(), __metadata("design:type", Boolean)],
  CreateChildServiceInput.prototype,
  "onHome",
  void 0
);
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreateChildServiceInput.prototype,
  "logo",
  void 0
);
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreateChildServiceInput.prototype,
  "icon",
  void 0
);
__decorate(
  [Field(() => Int), IsNumber(), __metadata("design:type", Number)],
  CreateChildServiceInput.prototype,
  "parentService",
  void 0
);
CreateChildServiceInput = __decorate([InputType()], CreateChildServiceInput);
const _CreateChildServiceInput = CreateChildServiceInput;
export { _CreateChildServiceInput as CreateChildServiceInput };
