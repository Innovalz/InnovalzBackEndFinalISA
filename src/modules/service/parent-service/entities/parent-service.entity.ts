import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let ParentServiceEntity = class ParentServiceEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
      icon: { nullable: false, type: () => String },
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
  ParentServiceEntity.prototype,
  "icon",
  void 0
);
ParentServiceEntity = __decorate([ObjectType()], ParentServiceEntity);
const _ParentServiceEntity = ParentServiceEntity;
export { _ParentServiceEntity as ParentServiceEntity };

let FindManyParentServicesEntity = class FindManyParentServicesEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [ParentServiceEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyParentServicesEntity = __decorate(
  [ObjectType()],
  FindManyParentServicesEntity
);
const _FindManyParentServicesEntity = FindManyParentServicesEntity;
export { _FindManyParentServicesEntity as FindManyParentServicesEntity };
