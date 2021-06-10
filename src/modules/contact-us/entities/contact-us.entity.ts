import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let ContactUsEntity = class ContactUsEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      name: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
      message: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
ContactUsEntity = __decorate([ObjectType()], ContactUsEntity);
const _ContactUsEntity = ContactUsEntity;
export { _ContactUsEntity as ContactUsEntity };
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";

let FindManyContactUsEntity = class FindManyContactUsEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [ContactUsEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyContactUsEntity = __decorate([ObjectType()], FindManyContactUsEntity);
const _FindManyContactUsEntity = FindManyContactUsEntity;
export { _FindManyContactUsEntity as FindManyContactUsEntity };
