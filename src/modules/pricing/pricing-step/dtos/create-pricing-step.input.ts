import { Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsString, IsNotEmpty, IsOptional } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let CreatePricingStepInput = class CreatePricingStepInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      number: { nullable: false, type: () => Number },
      name: { nullable: false, type: () => String },
      question: { nullable: true, type: () => String },
      desc: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [Field(() => Int), IsNumber(), __metadata("design:type", Number)],
  CreatePricingStepInput.prototype,
  "number",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingStepInput.prototype,
  "name",
  void 0
);
__decorate(
  [IsOptional(), IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingStepInput.prototype,
  "question",
  void 0
);
__decorate(
  [IsOptional(), IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingStepInput.prototype,
  "desc",
  void 0
);
CreatePricingStepInput = __decorate([InputType()], CreatePricingStepInput);
const _CreatePricingStepInput = CreatePricingStepInput;
export { _CreatePricingStepInput as CreatePricingStepInput };
