import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { PricingStepEntity } from "../../pricing-step/entities/pricing-step.entity";

let PricingCategoryEntity = class PricingCategoryEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      step: { nullable: false, type: () => Number },
      name: { nullable: false, type: () => String },
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
    Field(() => PricingStepEntity, { nullable: true }),
    __metadata("design:type", Number),
  ],
  PricingCategoryEntity.prototype,
  "step",
  void 0
);
PricingCategoryEntity = __decorate([ObjectType()], PricingCategoryEntity);
const _PricingCategoryEntity = PricingCategoryEntity;
export { _PricingCategoryEntity as PricingCategoryEntity };

let FindManyPricingCategoriesEntity = class FindManyPricingCategoriesEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [PricingCategoryEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyPricingCategoriesEntity = __decorate(
  [ObjectType()],
  FindManyPricingCategoriesEntity
);
const _FindManyPricingCategoriesEntity = FindManyPricingCategoriesEntity;
export { _FindManyPricingCategoriesEntity as FindManyPricingCategoriesEntity };
