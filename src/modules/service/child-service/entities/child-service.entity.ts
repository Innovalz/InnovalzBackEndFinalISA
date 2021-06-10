import { Field, Int, ObjectType, OmitType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../../core/graphql/base/entities/info.entity";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { ParentServiceEntity } from "../../parent-service/entities/parent-service.entity";

let ChildServiceEntity = class ChildServiceEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      title: { nullable: false, type: () => String },
      fullDesc: { nullable: false, type: () => [String] },
      isActive: { nullable: false, type: () => Boolean },
      onHome: { nullable: false, type: () => Boolean },
      logo: { nullable: false, type: () => String },
      icon: { nullable: false, type: () => String },
      parentService: { nullable: false, type: () => Number },
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
  ChildServiceEntity.prototype,
  "logo",
  void 0
);
__decorate(
  [Field(() => ImageScaler), __metadata("design:type", String)],
  ChildServiceEntity.prototype,
  "icon",
  void 0
);
__decorate(
  [
    Field(() => ParentServiceEntity, { nullable: true }),
    __metadata("design:type", Number),
  ],
  ChildServiceEntity.prototype,
  "parentService",
  void 0
);
ChildServiceEntity = __decorate([ObjectType()], ChildServiceEntity);
const _ChildServiceEntity = ChildServiceEntity;
export { _ChildServiceEntity as ChildServiceEntity };

let ChildChildServiceEntity = class ChildChildServiceEntity extends OmitType(
  ChildServiceEntity,
  [] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
ChildChildServiceEntity = __decorate([ObjectType()], ChildChildServiceEntity);
const _ChildChildServiceEntity = ChildChildServiceEntity;
export { _ChildChildServiceEntity as ChildChildServiceEntity };

let FindManyChildServicesEntity = class FindManyChildServicesEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [ChildServiceEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyChildServicesEntity = __decorate(
  [ObjectType()],
  FindManyChildServicesEntity
);
const _FindManyChildServicesEntity = FindManyChildServicesEntity;
export { _FindManyChildServicesEntity as FindManyChildServicesEntity };
