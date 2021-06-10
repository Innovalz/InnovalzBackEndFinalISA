import { InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let PricingFeatureInput = class PricingFeatureInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      desc: { nullable: false, type: () => String },
      items: { nullable: false, type: () => [String] },
    };
  }
};
__decorate(
  [IsString(), __metadata("design:type", String)],
  PricingFeatureInput.prototype,
  "desc",
  void 0
);
__decorate(
  [IsString({ each: true }), __metadata("design:type", Array)],
  PricingFeatureInput.prototype,
  "items",
  void 0
);
PricingFeatureInput = __decorate([InputType()], PricingFeatureInput);
const _PricingFeatureInput = PricingFeatureInput;
export { _PricingFeatureInput as PricingFeatureInput };
