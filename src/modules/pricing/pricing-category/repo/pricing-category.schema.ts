import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TPricingCategorySchema = class TPricingCategorySchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingCategorySchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingCategorySchema.prototype,
  "step",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingCategorySchema.prototype,
  "name",
  void 0
);
TPricingCategorySchema = __decorate([Schema()], TPricingCategorySchema);
const _TPricingCategorySchema = TPricingCategorySchema;
export { _TPricingCategorySchema as TPricingCategorySchema };
export const PricingCategorySchema = SchemaFactory.createForClass(
  TPricingCategorySchema
);
