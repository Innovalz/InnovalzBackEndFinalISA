import { Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsString, IsNotEmpty } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let CreatePricingCategoryInput = class CreatePricingCategoryInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      step: { nullable: false, type: () => Number },
      name: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [Field(() => Int), IsNumber(), __metadata("design:type", Number)],
  CreatePricingCategoryInput.prototype,
  "step",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingCategoryInput.prototype,
  "name",
  void 0
);
CreatePricingCategoryInput = __decorate(
  [InputType()],
  CreatePricingCategoryInput
);
const _CreatePricingCategoryInput = CreatePricingCategoryInput;
export { _CreatePricingCategoryInput as CreatePricingCategoryInput };
