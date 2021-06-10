import { Module } from "@nestjs/common";
import { JobService } from "./job.service";
import { JobResolver } from "./job.resolver";
import { JobSchema } from "./repo/job.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { JobRepo } from "./repo/job.repo";
import { __decorate } from "../../helpers/decorate";

let JobModule = class JobModule {};
JobModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.job, JobSchema, {
          disable: { i18n: true },
        }),
      ],
      providers: [JobRepo, JobService, JobResolver],
      exports: [JobService],
    }),
  ],
  JobModule
);
const _JobModule = JobModule;
export { _JobModule as JobModule };
