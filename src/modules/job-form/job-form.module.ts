import { Module } from "@nestjs/common";
import { JobFormService } from "./job-form.service";
import { JobFormResolver } from "./job-form.resolver";
import { JobFormSchema } from "./repo/job-form.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { JobFormRepo } from "./repo/job-form.repo";
import { __decorate } from "../../helpers/decorate";

let JobFormModule = class JobFormModule {};
JobFormModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.jobForm, JobFormSchema, {
          disable: { i18n: true },
        }),
      ],
      providers: [JobFormRepo, JobFormService, JobFormResolver],
      exports: [JobFormService],
    }),
  ],
  JobFormModule
);
const _JobFormModule = JobFormModule;
export { _JobFormModule as JobFormModule };
