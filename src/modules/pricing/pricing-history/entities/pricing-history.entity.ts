import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { PricingServiceEntity } from "../../pricing-services/entities/pricing-service.entity";
import { UserDataEntity } from "./user-data.entity";

let PricingHistoryEntity = class PricingHistoryEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      user: {
        nullable: false,
        type: () => UserDataEntity,
      },
      pricingServices: {
        nullable: false,
        type: () => [PricingServiceEntity],
      },
      totalPrice: { nullable: false, type: () => Number },
    };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
PricingHistoryEntity = __decorate([ObjectType()], PricingHistoryEntity);
const _PricingHistoryEntity = PricingHistoryEntity;
export { _PricingHistoryEntity as PricingHistoryEntity };

let FindManyPricingHistoriesEntity = class FindManyPricingHistoriesEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [PricingHistoryEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyPricingHistoriesEntity = __decorate(
  [ObjectType()],
  FindManyPricingHistoriesEntity
);
const _FindManyPricingHistoriesEntity = FindManyPricingHistoriesEntity;
export { _FindManyPricingHistoriesEntity as FindManyPricingHistoriesEntity };
