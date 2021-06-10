import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let PricingStepEntity = class PricingStepEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      number: { nullable: false, type: () => Number },
      name: { nullable: false, type: () => String },
      question: { nullable: true, type: () => String },
      desc: { nullable: true, type: () => String },
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
  [Field(() => Int), __metadata("design:type", Number)],
  PricingStepEntity.prototype,
  "number",
  void 0
);
PricingStepEntity = __decorate([ObjectType()], PricingStepEntity);
const _PricingStepEntity = PricingStepEntity;
export { _PricingStepEntity as PricingStepEntity };

let FindManyPricingStepsEntity = class FindManyPricingStepsEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [PricingStepEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyPricingStepsEntity = __decorate(
  [ObjectType()],
  FindManyPricingStepsEntity
);
const _FindManyPricingStepsEntity = FindManyPricingStepsEntity;
export { _FindManyPricingStepsEntity as FindManyPricingStepsEntity };
