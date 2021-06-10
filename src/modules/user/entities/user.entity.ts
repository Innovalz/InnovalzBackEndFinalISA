import { Field, HideField, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { Role } from "../../../services/auth/types/role.enum";

let UserEntity = class UserEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      email: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
      name: { nullable: true, type: () => String },
      company: { nullable: true, type: () => String },
      roles: {
        nullable: true,
        type: () => [Role],
      },
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
  [HideField(), __metadata("design:type", String)],
  UserEntity.prototype,
  "password",
  void 0
);
UserEntity = __decorate([ObjectType()], UserEntity);
const _UserEntity = UserEntity;
export { _UserEntity as UserEntity };

let FindManyUsersEntity = class FindManyUsersEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [UserEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyUsersEntity = __decorate([ObjectType()], FindManyUsersEntity);
const _FindManyUsersEntity = FindManyUsersEntity;
export { _FindManyUsersEntity as FindManyUsersEntity };

let UserWithTokenEntity = class UserWithTokenEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      token: { nullable: false, type: () => String },
      user: {
        nullable: false,
        type: () => UserEntity,
      },
    };
  }
};
UserWithTokenEntity = __decorate([ObjectType()], UserWithTokenEntity);
const _UserWithTokenEntity = UserWithTokenEntity;
export { _UserWithTokenEntity as UserWithTokenEntity };
