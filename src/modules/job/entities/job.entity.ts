import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let JobEntity = class JobEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      title: { nullable: false, type: () => String },
      shortDesc: { nullable: false, type: () => String },
      fullDesc: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
JobEntity = __decorate([ObjectType()], JobEntity);
const _JobEntity = JobEntity;
export { _JobEntity as JobEntity };

let FindManyJobsEntity = class FindManyJobsEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [JobEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyJobsEntity = __decorate([ObjectType()], FindManyJobsEntity);
const _FindManyJobsEntity = FindManyJobsEntity;
export { _FindManyJobsEntity as FindManyJobsEntity };
