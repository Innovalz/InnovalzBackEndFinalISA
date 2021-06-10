import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { PricingServiceEntity } from "../../pricing-services/entities/pricing-service.entity";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { IsPositive } from "class-validator";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";

let PricingTeamMemberEntity = class PricingTeamMemberEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      services: { nullable: true, type: () => Number },
      title: { nullable: false, type: () => String },
      image: { nullable: false, type: () => String },
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
    Field(() => [PricingServiceEntity], { nullable: true }),
    __metadata("design:type", Number),
  ],
  PricingTeamMemberEntity.prototype,
  "services",
  void 0
);
__decorate(
  [Field(() => ImageScaler), __metadata("design:type", String)],
  PricingTeamMemberEntity.prototype,
  "image",
  void 0
);
PricingTeamMemberEntity = __decorate([ObjectType()], PricingTeamMemberEntity);
const _PricingTeamMemberEntity = PricingTeamMemberEntity;
export { _PricingTeamMemberEntity as PricingTeamMemberEntity };

let FindManyPricingTeamMembersEntity = class FindManyPricingTeamMembersEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [PricingTeamMemberEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyPricingTeamMembersEntity = __decorate(
  [ObjectType()],
  FindManyPricingTeamMembersEntity
);
const _FindManyPricingTeamMembersEntity = FindManyPricingTeamMembersEntity;
export { _FindManyPricingTeamMembersEntity as FindManyPricingTeamMembersEntity };
