import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { JobEntity } from "../../job/entities/job.entity";
import { ResumeScaler } from "../../../core/graphql/scalers/resume.scaler";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { IsPositive } from "class-validator";
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";

let JobFormEntity = class JobFormEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      job: { nullable: false, type: () => Number },
      name: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
      cv: { nullable: false, type: () => String },
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
  [Field(() => JobEntity), __metadata("design:type", Number)],
  JobFormEntity.prototype,
  "job",
  void 0
);
__decorate(
  [Field(() => ResumeScaler), __metadata("design:type", String)],
  JobFormEntity.prototype,
  "cv",
  void 0
);
JobFormEntity = __decorate([ObjectType()], JobFormEntity);
const _JobFormEntity = JobFormEntity;
export { _JobFormEntity as JobFormEntity };

let FindManyJobFormsEntity = class FindManyJobFormsEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [JobFormEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManyJobFormsEntity = __decorate([ObjectType()], FindManyJobFormsEntity);
const _FindManyJobFormsEntity = FindManyJobFormsEntity;
export { _FindManyJobFormsEntity as FindManyJobFormsEntity };
