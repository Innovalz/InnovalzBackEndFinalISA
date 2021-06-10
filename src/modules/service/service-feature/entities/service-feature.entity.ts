import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { ChildServiceEntity } from "../../child-service/entities/child-service.entity";

let ServiceFeatureEntity = class ServiceFeatureEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
      childService: { nullable: false, type: () => Number },
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
    Field(() => ChildServiceEntity, { nullable: true }),
    __metadata("design:type", Number),
  ],
  ServiceFeatureEntity.prototype,
  "childService",
  void 0
);
__decorate(
  [Field(() => ImageScaler), __metadata("design:type", String)],
  ServiceFeatureEntity.prototype,
  "image",
  void 0
);
ServiceFeatureEntity = __decorate([ObjectType()], ServiceFeatureEntity);
const _ServiceFeatureEntity = ServiceFeatureEntity;
export { _ServiceFeatureEntity as ServiceFeatureEntity };

let FindManyServiceFeaturesEntity = class FindManyServiceFeaturesEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [ServiceFeatureEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyServiceFeaturesEntity = __decorate(
  [ObjectType()],
  FindManyServiceFeaturesEntity
);
const _FindManyServiceFeaturesEntity = FindManyServiceFeaturesEntity;
export { _FindManyServiceFeaturesEntity as FindManyServiceFeaturesEntity };
