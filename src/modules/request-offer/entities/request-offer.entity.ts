import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let RequestOfferEntity = class RequestOfferEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      name: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
      product: { nullable: true, type: () => Number },
      otherProduct: { nullable: true, type: () => String },
      features: { nullable: true, type: () => [Number] },
      details: { nullable: true, type: () => String },
    };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
RequestOfferEntity = __decorate([ObjectType()], RequestOfferEntity);
const _RequestOfferEntity = RequestOfferEntity;
export { _RequestOfferEntity as RequestOfferEntity };

let FindManyRequestOffersEntity = class FindManyRequestOffersEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [RequestOfferEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyRequestOffersEntity = __decorate(
  [ObjectType()],
  FindManyRequestOffersEntity
);
const _FindManyRequestOffersEntity = FindManyRequestOffersEntity;
export { _FindManyRequestOffersEntity as FindManyRequestOffersEntity };
