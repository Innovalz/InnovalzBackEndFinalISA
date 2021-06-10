import { Prop, Schema } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TPricingFeatureSchema = class TPricingFeatureSchema {};
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingFeatureSchema.prototype,
  "desc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Array)],
  TPricingFeatureSchema.prototype,
  "items",
  void 0
);
TPricingFeatureSchema = __decorate([Schema()], TPricingFeatureSchema);
const _TPricingFeatureSchema = TPricingFeatureSchema;
export { _TPricingFeatureSchema as TPricingFeatureSchema };
