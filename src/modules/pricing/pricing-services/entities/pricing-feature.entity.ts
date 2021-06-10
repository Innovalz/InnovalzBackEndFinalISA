import { ObjectType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";

let PricingFeatureEntity = class PricingFeatureEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      desc: { nullable: false, type: () => String },
      items: { nullable: false, type: () => [String] },
    };
  }
};
PricingFeatureEntity = __decorate([ObjectType()], PricingFeatureEntity);
const _PricingFeatureEntity = PricingFeatureEntity;
export { _PricingFeatureEntity as PricingFeatureEntity };
