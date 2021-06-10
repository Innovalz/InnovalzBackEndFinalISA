import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TPricingStepSchema = class TPricingStepSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingStepSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingStepSchema.prototype,
  "number",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingStepSchema.prototype,
  "name",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingStepSchema.prototype,
  "question",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingStepSchema.prototype,
  "desc",
  void 0
);
TPricingStepSchema = __decorate([Schema()], TPricingStepSchema);
const _TPricingStepSchema = TPricingStepSchema;
export { _TPricingStepSchema as TPricingStepSchema };
export const PricingStepSchema = SchemaFactory.createForClass(
  TPricingStepSchema
);
