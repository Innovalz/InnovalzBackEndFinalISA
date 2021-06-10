import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { PricingCategoryEntity } from "../../pricing-category/entities/pricing-category.entity";
import { PricingTeamMemberEntity } from "../../pricing-team-member/entities/pricing-team-member.entity";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { IsPositive } from "class-validator";
import { PricingFeatureEntity } from "./pricing-feature.entity";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";

let PricingServiceEntity = class PricingServiceEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      category: { nullable: false, type: () => Number },
      image: { nullable: true, type: () => String },
      title: { nullable: true, type: () => String },
      desc: { nullable: true, type: () => String },
      setupRate: { nullable: true, type: () => Number },
      setupTime: { nullable: true, type: () => Number },
      devRate: { nullable: true, type: () => Number },
      devTime: { nullable: true, type: () => Number },
      monthlyHostRate: { nullable: true, type: () => Number },
      monthlyHostDesc: { nullable: true, type: () => String },
      price: { nullable: true, type: () => Number },
      team: { nullable: true, type: () => [Number] },
      features: {
        nullable: true,
        type: () => PricingFeatureEntity,
      },
    };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
__decorate(
  [
    Field(() => PricingCategoryEntity, { nullable: true }),
    __metadata("design:type", Number),
  ],
  PricingServiceEntity.prototype,
  "category",
  void 0
);
__decorate(
  [Field(() => ImageScaler), __metadata("design:type", String)],
  PricingServiceEntity.prototype,
  "image",
  void 0
);
__decorate(
  [
    Field(() => [PricingTeamMemberEntity], { nullable: true }),
    __metadata("design:type", Array),
  ],
  PricingServiceEntity.prototype,
  "team",
  void 0
);
PricingServiceEntity = __decorate([ObjectType()], PricingServiceEntity);
const _PricingServiceEntity = PricingServiceEntity;
export { _PricingServiceEntity as PricingServiceEntity };

let FindManyPricingServicesEntity = class FindManyPricingServicesEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [PricingServiceEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyPricingServicesEntity = __decorate(
  [ObjectType()],
  FindManyPricingServicesEntity
);
const _FindManyPricingServicesEntity = FindManyPricingServicesEntity;
export { _FindManyPricingServicesEntity as FindManyPricingServicesEntity };
