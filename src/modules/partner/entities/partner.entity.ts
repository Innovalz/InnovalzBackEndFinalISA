import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";
import { ImageScaler } from "../../../core/graphql/scalers/image.scaler";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let PartnerEntity = class PartnerEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
      isActive: { nullable: false, type: () => Boolean },
      onHome: { nullable: false, type: () => Boolean },
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
  [Field(() => ImageScaler), __metadata("design:type", String)],
  PartnerEntity.prototype,
  "image",
  void 0
);
PartnerEntity = __decorate([ObjectType()], PartnerEntity);
const _PartnerEntity = PartnerEntity;
export { _PartnerEntity as PartnerEntity };

let FindManyPartnersEntity = class FindManyPartnersEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [PartnerEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyPartnersEntity = __decorate([ObjectType()], FindManyPartnersEntity);
const _FindManyPartnersEntity = FindManyPartnersEntity;
export { _FindManyPartnersEntity as FindManyPartnersEntity };
